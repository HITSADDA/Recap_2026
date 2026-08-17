import time

def get_execution_time(f):
    def wrapper(*args, **kwargs):
        start = time.time()
        rv = f(*args, **kwargs)
        total = time.time() - start
        print(f"Total Time: ", total)
        return rv

    return wrapper

@get_execution_time
def test1():
    for _ in range(10000):
        pass

@get_execution_time
def test2(name):
    print(f"{name}")
    for _ in range(10000):
        pass
    return name


test1()
test2("Vishal")