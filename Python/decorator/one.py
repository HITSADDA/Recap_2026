def uvs_decorator(f):
    def wrapper(*args, **kwargs):
        print("Stated the function")
        rv = f(*args, **kwargs)
        print("Ended the function")

        return rv

    return wrapper


@uvs_decorator
def test1():
    print("Hiii")

@uvs_decorator
def test2(name):
    print(f"{name}")
    return f'{name} hello'

test1()
test2("Vishal")