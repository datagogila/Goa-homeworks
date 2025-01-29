def is_even(n): 
    if isinstance(n, float) and n % 1 != 0:
        return False  
    return n % 2 == 0  

    pass


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