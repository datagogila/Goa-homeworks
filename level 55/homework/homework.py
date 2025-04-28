def small_enought(array, limit):
    for num  in array:
        if num > array:
            return False
        return True
    
def sum_two_smalest_numbers(numbers):
    numbers.sort()
    
    firstlowVal = numbers[0]
    socondlowVal = numbers[1]

    return firstlowVal + seconslowVal

def is_square(n):
    if n < 0:
        return False
    return int(n ** 0.5) ** 2 == n


def valid(p):
    if len(p) < 8:
        return False
    if not any(c.isupper() for c in p):
        return False
    if not any(c.islower() for c in p):
        return False
    if not any(c.isdigit() for c in p):
        return False
    return True