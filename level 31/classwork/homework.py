#Task 2: String Formatting
#Create a string named template with the following content: "Hello, {name}. Welcome to {place}."
#Use the format() function to replace {name} with "Alice" and {place} with "Wonderland". Store the result in a variable named formatted_string and print it.
# Task 2: String Formatting

template = "Hello, {name}. Welcome to {place}."
formatted_string = template.format(name="Alice", place="Wonderland")
print(formatted_string)

#Task 3: Joining Strings
#Create a list named words that contains the following strings: "apple", "banana", "cherry".
#Use the join() function to combine these words into a single string, separated by a comma and a space ", ". Store the result in a variable named fruit_string and print it.

# Task 3: Joining Strings
words = ["apple", "banana", "cherry"]
fruit_string = " ".join(words)
print(fruit_string)
