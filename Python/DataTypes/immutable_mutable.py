"""
@Immutable:- 
    Integer, Float, String, Boolean, Tuple, Boolean, Frozen set, Bytes

    We Cannot change the Variable Object in-place it will create new object in the heap and store the new value
"""

# Example with String
username = "Vishal Singh"

print(username)
print(id(username)) # Memory Address 1

username = "Vishal Singh Rajpurohit"

print(username)
print(id(username)) # Memory Address 1

# Example with Int
x = 10
y = x

x = 15

print(x)
print(y)

"""
@Mutable:- 
    List, Set, Dictionary, Array, ByteArray

    Ca be changed in-place
"""