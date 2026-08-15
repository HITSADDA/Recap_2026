
# @@@@@ Simple Comprehenstion

numbers = [12, 13, 14, 15]

new_numbers = [x + 4 for x in numbers]

print(new_numbers)

in_table_of_two = [x for x in numbers if x%2 == 0]
print(in_table_of_two)

# @@@@@ Intermediate Comprehenstion
# Name starting a or p or ending with e 
fruits = ['apple', 'banana', 'pineapple', 'avocardo']


new_fruits = [
    x for x in fruits
    if len(x) >= 2
    if x[0] == 'a' or x[0] == 'p'
    if x[len(x) - 1] == 'e'
] 

print(new_fruits)


# @@@@@ Nested Comprehenstion

nested_numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9]]

flatted = [
    num for row in nested_numbers for num in row
]

print(flatted)


#@@@@@ IF / Else 

even_or_odd = [
    "Even" if x % 2 == 0 else 'Odd' for x in flatted
]

print(even_or_odd)


# 3d MAtrix

mat_3d = [
    [[[u for u in range(5)] for _ in range(5)] for _ in range(5)]
]

print(mat_3d)


# @@@  Generator Comprehension

sum_of_squre = sum(x**2 for x in range(100000))

print(sum_of_squre)