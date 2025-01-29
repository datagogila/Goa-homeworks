# Create the list
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Print the entire list
print(fruits)

# Access and print the first and last items in the list
print(fruits[0])  # First item
print(fruits[-1])  # Last item

# Add a new fruit "fig" to the list
fruits.append("fig")

# Remove "banana" from the list
fruits.remove("banana")

# Change the value of the second item to "blueberry"
fruits[1] = "blueberry"

# Print the length of the list
print(len(fruits))





# Create the list
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Print the entire list
print(fruits)

# Access and print the first and last items in the list
print(fruits[0])  # First item
print(fruits[-1])  # Last item

# Add a new fruit "fig" to the list
fruits.append("fig")

# Remove "banana" from the list
fruits.remove("banana")

# Change the value of the second item to "blueberry"
fruits[1] = "blueberry"

# Print the length of the list
print(len(fruits))



# Create the list
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

# Use append() to add 100 to the end of the list
numbers.append(100)

# Use insert() to add 5 at the beginning of the list
numbers.insert(0, 5)

# Use remove() to remove the number 30 from the list
numbers.remove(30)

# Use reverse() to reverse the order of the list
numbers.reverse()

# Use index() to find the index of the number 50
index_of_50 = numbers.index(50)

# Use count() to count how many times 20 appears in the list
count_of_20 = numbers.count(20)

# Print the modified list and results
print("Modified List:", numbers)
print("Index of 50:", index_of_50)
print("Count of 20:", count_of_20)



# Create the list containing integers from 1 to 10
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Use list slicing to create the first half of the list
first_half = numbers[:5]

# Use list slicing to create the second half of the list
second_half = numbers[5:]

# Use a list comprehension to create a list of squares of the numbers
squares = [x ** 2 for x in numbers]

# Print all three lists
print("First Half:", first_half)
print("Second Half:", second_half)
print("Squares:", squares)



# ტემპერატურის სია
temperatures = [72, 68, 75, 70, 78, 74, 71]

# უმაღლესი ტემპერატურის გამოთვლა
highest_temperature = max(temperatures)
print("უმაღლესი ტემპერატურა:", highest_temperature)

# ყველაზე დაბალი ტემპერატურის გამოთვლა
lowest_temperature = min(temperatures)
print("ყველაზე დაბალი ტემპერატურა:", lowest_temperature)

# საშუალო ტემპერატურის გამოთვლა
average_temperature = sum(temperatures) / len(temperatures)
print("საშუალო ტემპერატურა:", average_temperature)

# სიის გააზრება, რომ შევქმნათ ახალი სია 70 გრადუსზე ზემოთ ტემპერატურით
above_70 = [temp for temp in temperatures if temp > 70]

# დაბეჭდეთ ზემოთ_70 სია
print("70 გრადუსზე ზემოთ ტემპერატურები:", above_70)
