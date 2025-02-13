def get_name():
    name = input("What's your name? ")
    if name:  # checks if the input is not empty
        return f"Hello, {name}!"
    else:
        return "You didn't enter a name!"


def is_even(n): 
    if isinstance(n, float) and n % 1 != 0:
        return False  
    return n % 2 == 0  

def main(verb, noun):
    if verb == "run":
        print(f"The {noun} is running!")
    else:
        print(f"The {noun} will {verb} soon.")

def check_number(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"


def number_to_string(num):
    return str(num)


def boolean_to_string(b):
    return str(b)

def say_hello(name):
    return "Hello, " + name


def quarter_of(month):
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    elif 10 <= month <= 12:
        return 4

    pass