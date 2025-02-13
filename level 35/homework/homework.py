# მაგალითი 1: მარტივი if-ის ბრძანება
age = 18
if age >= 18:
    print("თქვენ ხართ სრულწლოვანი.")

# მაგალითი 2: if-else ბრძანება
temperature = 15
if temperature > 20:
    print("თბილია.")
else:
    print("ცივა.")

score = 85
if score >= 90:
    print("A")
elif score >= 75:
    print("B")
else:
    print("C")



# მაგალითი 1: for-ის ციკლი
for i in range(3):
    print(i)

# მაგალითი 2: while-ის ციკლი
count = 0
while count < 3:
    print(count)
    count += 1

# მაგალითი 3: for-ის ციკლი სიის ელემენტებით
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)




# მაგალითი 1: მარტივი ფუნქცია
def greet(name):
    print(f"გამარჯობა, {name}!")

greet("Alice")

# მაგალითი 2: ფუნქცია დაბრუნების მნიშვნელობით
def add(x, y):
    return x + y

result = add(10, 5)
print(result)

# მაგალითი 3: ფუნქცია პარამეტრის გამორკვევით
def greet(name="სტუმარი"):
    print(f"გამარჯობა, {name}!")

greet()  # გამოიყენება დეფოლტი "სტუმარი"



# Example 1: Creating a list
fruits = ["apple", "banana", "cherry"]
print(fruits)

# Example 2: Accessing list elements
print(fruits[1])  # Output: "banana"

# Example 3: Adding elements to a list
fruits.append("orange")
print(fruits)
