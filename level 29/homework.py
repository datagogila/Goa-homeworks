#Create a list named fruits that contains the following items: "apple", "banana", "cherry", "date", and "elderberry".
#Print the entire list.
#Access and print the first and last items in the list.
#Add a new fruit "fig" to the list.
#Remove "banana" from the list.
#Change the value of the second item to "blueberry".
#Print the length of the list

# Creating the list
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Printing the entire list
print(fruits)

# Accessing and printing the first and last items
print("First item:", fruits[0])
print("Last item:", fruits[-1])

# Adding a new fruit "fig" to the list
fruits.append("fig")

# Removing "banana" from the list
fruits.remove("banana")

# Changing the value of the second item to "blueberry"
fruits[1] = "blueberry"

# Printing the length of the list
print("Length of the list:", len(fruits))


#Create a list named numbers that contains the following integers: 10, 20, 30, 40, 50, 60, 70, 80, 90.
#Use the append() function to add the number 100 to the end of the list.
#Use the insert() function to add the number 5 at the beginning of the list.
#Use the remove() function to remove the number 30 from the list.
#Use the sort() function to sort the list in ascending order.
#Use the reverse() function to reverse the order of the list.
#Use the index() function to find the index of the number 50.
#Use the count() function to count how many times 20 appears in the list




# Create the list
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

# Use append() to add 100 to the end of the list
numbers.append(100)

# Use insert() to add 5 at the beginning of the list
numbers.insert(0, 5)

# Use remove() to remove the number 30 from the list
numbers.remove(30)

# Use sort() to sort the list in ascending order
numbers.sort()

# Use reverse() to reverse the order of the list
numbers.reverse()

# Use index() to find the index of the number 50
index_of_50 = numbers.index(50)

# Use count() to count how many times 20 appears in the list
count_of_20 = numbers.count(20)

# Output the final list and results
print("Final List:", numbers)
print("Index of 50:", index_of_50)
print("Count of 20:", count_of_20)


#Slicing and List Comprehensions
#Create a list named numbers that contains the integers from 1 to 10.
#Use list slicing to create a new list named first_half that contains the first five elements from numbers.
#Use list slicing to create another list named second_half that contains the last five elements from numbers.
#Use a list comprehension to create a new list named squares that contains the squares of each number in the numbers list.
#Print all three lists: first_half, second_half, and squares.

# Create the list of integers from 1 to 10
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Use list slicing to create a new list named first_half
first_half = numbers[:5]

# Use list slicing to create another list named second_half
second_half = numbers[5:]

# Use list comprehension to create a new list named squares
squares = [x**2 for x in numbers]

# Print all three lists
print("First Half:", first_half)
print("Second Half:", second_half)
print("Squares:", squares)
