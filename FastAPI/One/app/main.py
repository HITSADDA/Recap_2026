from fastapi import FastAPI, BackgroundTasks
from functools import wraps
import time

app = FastAPI()

def calculate_time(func):
    # 2. @wraps preserves the original endpoint's name and signature (Crucial for FastAPI)
    @wraps(func) 
    async def wrapper(*args, **kwargs):
        start = time.time()
        
        # 3. Await the actual route function and capture its return value
        result = await func(*args, **kwargs) 
        
        print(f'Total time is {time.time() - start}')
        
        # 4. Return the result back to FastAPI
        return result 
    
    return wrapper

async def time_consuming_task(tm):
    time.sleep(tm)

@app.get('/without-backgorund-task')   
@calculate_time
async def root():
    await time_consuming_task(4)
    return{
        'messsage': "OK"
    }

@app.get('/fastapi-backgorund-tasks')   
@calculate_time
async def root(bg: BackgroundTasks):

    bg.add_task(time_consuming_task, 4)
    return{
        'messsage': "OK"
    }