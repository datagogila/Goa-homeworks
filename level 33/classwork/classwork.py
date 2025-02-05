#Task: Format a String
#Write a Python program that takes a user's name and age as input. Use the format() function to create a sentence that says,
#"Hello, [Name]! You are [Age] years old."

# Taking user input for name and age
name = input("Enter your name: ")
age = input("Enter your age: ")

# Using format() to create a sentence
message = "Hello, {}! You are {} years old.".format(name, age)

# Displaying the message
print(message)



# List of words
words = ["Python", "is", "fun"]

# Joining the list into a single string with spaces
sentence = " ".join(words)

# Displaying the result
print(sentence)



# Ask the user to input a sentence
sentence = input("Please enter a sentence: ")

# Split the sentence into a list of words
words = sentence.split()

# Print the list of words
print("List of words:", words)



# Ask the user to input a sentence
sentence = input("Please enter a sentence: ")

# Ask for the word to replace
word_to_replace = input("Enter the word you want to replace: ")

# Ask for the new word to replace it with
new_word = input("Enter the new word to replace it with: ")

# Replace the word using the replace() function
modified_sentence = sentence.replace(word_to_replace, new_word)

# Print the modified sentence
print("Modified sentence:", modified_sentence)
