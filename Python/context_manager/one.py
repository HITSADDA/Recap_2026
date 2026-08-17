"""
@ Context Manager:- With
"""

# Without Context
file = open('my.txt', 'r')
try:
    # Some Operation
    pass
finally:
    file.close()

with open('my.txt', 'r') as file:
    # Context Scope Start
    # Context Scope End
    pass



"""
@ Example Implementation
"""

class File:
    def __init__(self, filename, method):
        self.file = open(filename, method)

    # Enter -> Runs on enter the context
    def __enter__(self):
        return self.file

    # Runs before context exit
    def __exit__(self, exc_type, exc, tb):
        # print(f"{exc_type}, {exc}, {tb}")
        if self.file:
            file.close()


with File('my.txt', 'r') as file:
    text = file.readline()
    print(text)
    # raise Exception("Invalid Values")



"""
@ Example contextlib:-
    it gives us decorators to use with Generator
"""

from contextlib import contextmanager

@contextmanager
def file(filename, context):
    print("Starting the context")
    f = open(filename, context)
    yield f
    f.close()
    print("ending the context")

with file('my.txt', 'r') as f:
    print(f.readline())