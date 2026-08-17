
# Iterable
list1 = [12, 13, 14, 15]

# Iterator

my_iterator = iter(list1)

print(my_iterator)

print(next(my_iterator))
print(next(my_iterator))
print(next(my_iterator))
print(my_iterator.__next__())

