def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")

    return result

def row_sum_odd_numbers(n):
 return n ** 3

def nb_year(p0, percent, aug, p):
    years = 0
    while True:
        if p0 >= p:
            return years
        else:
            p0 = int(p0 + p0 * (percent / 100) + aug)
            years += 1


def printer_error(s):
    error = 0

    for char in s:

        if char < 'A' or char > 'M':

            err += 1

      #      return f '{err}/{len}(s)'