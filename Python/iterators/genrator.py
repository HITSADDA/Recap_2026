"""
 @@@@@@@@ Genrator Implementation: ->
"""

class MyGenrator():
    def __init__(self, n):
        self.n = n

    def __itor__(self):
        self.current = 0
        return self

    def __next__(self):
        self.current += 1
        if self.current >= len(self.n):
            raise StopIteration
        return self

list1 = [12, 13, 14]
a = map(lambda x:x*2, list1)

for i in a:
    print(i)

"""
 @@@@@@@@ Generator: ->
    Special Type of function or expression for using Interators,
    Yield Use for returning the value after each Yield the execution of function stoppes and the current context is being saved and used for next iteration
"""


# Genrator function for genrate n numbers
def gen_num(n):
    for i in range(n + 1):
        yield i


x = gen_num(5)

# print(x)
# print(x.__next__())
# print(x.__next__())
# print(x.__next__())



"""
 @@@@@@@@ Generator Comprehension: ->
"""

comp_1 = (x for x in range(1, 11))

print(comp_1)

print(next(comp_1.__iter__()))
print(next(comp_1.__iter__()))
print(next(comp_1.__iter__()))



def new_gen_func():
    yield "One"
    yield "Two"
    yield "Three"
    yield "Four"

z = new_gen_func()

print(next(z.__iter__()))
print(next(z.__iter__()))
print(next(z.__iter__()))


# with open('my.txt', 'w') as f:
#     f.writelines(["I am indian \n", 'India is my country \n', 'All Indians are my brothers and sisters \n'])


def read_file(src):
    with open(src, 'r+') as f:
        for i in f.readlines():
            yield i


read = read_file('my.txt')

print(next(iter(read)))
print(next(iter(read)))
print(next(iter(read)))