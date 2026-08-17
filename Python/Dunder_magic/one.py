class Person:
    def __init__(self, name):
        self.name = name

    # String Representation of Object:- how object will appear on print
    def __repr__(self):
        return f"Person({self.name})"

    # Airthmatics

    def __add__(self, x):
        return f"{self.name} {x}"

    def __mul__(self, x):
        return self.name * x


    # Type Conversion of the
    def __str__(self):
        print('str called')
        return "hoo"

    def __int__(self):
        pass

    # Call Like Function Call
    def __call__(self, *args, **kwds):
        print("Called")


p1 = Person("Vishal")

print(p1)

print(p1 + 2)
print(p1 * 2)

print(str(p1))

p1()