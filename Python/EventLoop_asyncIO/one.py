import asyncio


async def fetch_data_simulation(d):
    # print("Fetching some data....")
    print(f'It Will take: {d}s ')
    await asyncio.sleep(d)  # Simulating API Call Wait Time
    # print("Fetch Done")

    return f"Awaited for {d} Seconds"

"""
@ Example one with Async Await without concurrent
"""

async def main():
    # fetch_data_simulation(3) #nable tracemalloc to get the object allocation traceback
    # task1 = fetch_data_simulation(3)
    # task2 = fetch_data_simulation(2)

    # result1 = await task1
    # result2 = await task2

    task1 = await fetch_data_simulation(3)
    task2 = await fetch_data_simulation(2)

    print(task1)
    print(task2)


"""
@ Example one with Async Await and CONCURRENT Execution
"""
async def main():
    task1 = asyncio.create_task(fetch_data_simulation(5))
    task2 = asyncio.create_task(fetch_data_simulation(6))

    print("...Executed some task.....")

    print(await task1)
    print(await task2)


"""
@ Example one with asyncio.gather()
    But it is not good in error handling:- if  any function crashed it will not stop the execution
"""

async def main():
    results = await asyncio.gather(fetch_data_simulation(4), fetch_data_simulation(2), fetch_data_simulation(3))

    for result in results:
        print(result)


"""
@ Example one with asyncio.TaskGroup()
    But it is not good in error handling:- if  any function crashed it will not stop the execution
"""

async def main():
    tasks = []

    async with asyncio.TaskGroup() as tg:
        for sleep_time in [4, 2, 3]:
            task = tg.create_task(fetch_data_simulation(sleep_time))
            tasks.append(task)

    results = [task.result() for task in tasks]

    for result in results:
        print(result)




"""
@ Synchronization of the progra
    @ asyncio.Lock -> Used for restrict Uses of shared variable at a time in specific block of code
"""

shared_resource = 0

lock = asyncio.Lock()

async def sync_func(tm):
    print(f"..... function stated: {tm}")

    global shared_resource

    # This block will restrict toher Concurrent Operations untill it exited
    async with lock:
        print(f"Strating Lock: {shared_resource}")
        shared_resource += 10
        await asyncio.sleep(tm)
        print(f"Exiting the {shared_resource}")


async def main():
    await asyncio.gather(sync_func(4), sync_func(2), sync_func(3), sync_func(2))


"""
@ Synchronization of the program
    @ asyncio.Semaphore -> Used for limit function Uses of shared variable at a time in specific block of code
"""

shared_resource = 0

async def sync_func(semaphore, tm):
    global shared_resource
    print(f"..... function stated: {tm}")

    async with semaphore:
        print(f"Strating Lock: {shared_resource}")
        shared_resource += 10
        await asyncio.sleep(tm)
        print(f"Exiting the {shared_resource}")

async def main():
    symphore = asyncio.Semaphore(2) # 2: How many functions can share the rosource
    await asyncio.gather(sync_func(symphore,4), sync_func(symphore,2), sync_func(symphore,3), sync_func(symphore,2))


asyncio.run(main())