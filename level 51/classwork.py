def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")

    return result


def printer_error(s):
    error = 0

    for char in s:

        if char < 'A' or char > 'M':

            err += 1

      #      return f '{err}/{len}(s)'