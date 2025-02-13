def bool_to_word(bool):
    return "Yes" if bool else "No"


def grow(arr):
	product = 1
	for i in arr:
		product *= i
	return product
