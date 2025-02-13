#Task: Format a String
#Write a Python program that takes a user's name and age as input. Use the format() function to create a sentence that says, "Hello, [Name]! You are [Age] years old.
user_string = input("Please enter a string: ")

lowercase_string = user_string.lower()

print("Lowercase string:", lowercase_string)


#Task: Join a List of Strings
#Given a list of words ["Python", "is", "fun"], use the join() function to combine them into a single string, separated by spaces. The result should be "Python is fun".
# Ask the user to input a sentence
sentence = input("Please enter a sentence: ")

# Convert the sentence to uppercase using the upper() function
uppercase_sentence = sentence.upper()

# Print the uppercase sentence
print("Uppercase sentence:", uppercase_sentence)



#Task: Split a String
#Write a program that asks the user to input a sentence. Use the split() function to break the sentence into a list of words. Print the list of words.
# Ask the user to input a sentence
sentence = input("Enter a sentence: ")

# Split the sentence into a list of words
words = sentence.split()

# Print the list of words
print("List of words:", words)


#Task: Replace Substrings
#Create a program that asks the user for a sentence and a word to replace. Then, ask for the new word to replace it with. Use the replace() function to make the substitution and print the modified sentence
# Ask the user for a sentence
sentence = input("Enter a sentence: ")

# Ask for the word to replace
old_word = input("Enter the word to replace: ")

# Ask for the new word
new_word = input("Enter the new word: ")

# Replace the old word with the new word
modified_sentence = sentence.replace(old_word, new_word)

# Print the modified sentence
print("Modified sentence:", modified_sentence)



#Task: Convert to Lowercase
#Write a Python script that takes a mixed-case string and converts it entirely to lowercase using the lower() function.


# Ask the user to enter a mixed-case string
text = input("Enter a mixed-case string: ")

# Convert the string to lowercase
lowercase_text = text.lower()

# Print the lowercase string
print("Lowercase string:", lowercase_text)



#Task: Convert to Uppercase
#Create a program that asks the user to input a sentence and then converts the entire sentence to uppercase using the upper() function 

# Ask the user to enter a sentence
sentence = input("Enter a sentence: ")

# Convert the sentence to uppercase
uppercase_sentence = sentence.upper()

# Print the uppercase sentence
print("Uppercase sentence:", uppercase_sentence)

