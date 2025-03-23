def solution(text, ending):
    return text.endswith(ending)


def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "":
        return value1 - value2
    else:
        return value1 / value2
    

def digitize(n):
    return [int(digit) for digit in str(n)[::-1]]

def century(year):
    return (year + 99) // 100

def litres(time):
    return time // 2
