from threading import Thread
from concurrent.futures import ThreadPoolExecutor
import time


def fun1(t):
    print(f"Sleeping for {t} Seconds")
    time.sleep(t)
    print("Done")
    return f"{t}"

"""
@Basic On Single Thread
"""

fun1(3)
fun1(2)
fun1(1)


"""
@Thread:-
    The Thread without waiting for completion
"""

t1 = Thread(target=fun1, args=[4])
t2 = Thread(target=fun1, args=[3])
t3 = Thread(target=fun1, args=[2])

t1.start()
t2.start()
t3.start()


print("Some Operation....")


"""
@Thread:-
    The Thread and waiting for completion
"""


t1.start()
t2.start()
t3.start()

# Waiting for completion of the operations
result1 = t1.join()
result2 = t2.join()
result3 = t3.join()

print("Output for 1: ", result1)
print("Output for 2: ", result2)
print("Output for 3: ", result3)

print("Some Operation....")



"""
@concurrent.futures:-
    Better way to handle Multi Threading with simple syntax
"""

def get_threads(f):
    with ThreadPoolExecutor() as executor:
        e1 = executor.submit(f, 3)
        e2 = executor.submit(f, 2)
        e3 = executor.submit(f, 1)
        print(f"result: {e1.result()}")
        print(f"result: {e2.result()}")
        print(f"result: {e3.result()}")

# get_threads(fun1)


"""
@concurrent.futures:-
    Better way to handle Multi Threading with map keyword
"""

def get_threads_with_map(f, l):
    with ThreadPoolExecutor() as executor:
        results = executor.map(f, l)
        for rv in results:
            print(f"Result: {rv}")


get_threads_with_map(fun1, [4, 3, 1])