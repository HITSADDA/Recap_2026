
"""
@Multiple Inheritance:- 
    1. Wrong way to do
        this will never call constructor of Mother Class
"""

"""
class Father:
    def __init__(self):
        print("Fater Called")

class Mother:
    def __init__(self):
        print("Mother Called")


class Child(Father, Mother):
    def __init__(self):
        print('son Called')
        super().__init__()

obj = Child()
"""

"""
@Multiple Inheritance:- 
    2. We Needed to call super().__init__() in every class to 
"""

class GrandPA:
    def __init__(self):
        print("GrandPA Called")
        super().__init__()

    def what_is_your_name(self):
        print("my name is GrandPA")

class Father(GrandPA):
    def __init__(self):
        print("Fater Called")
        super().__init__()

    # def what_is_your_name(self):
    #     print("my name is father")

class Mother:
    def __init__(self):
        print("Mother Called")
        super().__init__()

    def what_is_your_name(self):
        print("my name is mother")


class Child(Father, Mother):
    def __init__(self):
        print('son Called')
        super().__init__()

obj2 = Child()


# MRO
obj2.what_is_your_name()

print(Child.__mro__)