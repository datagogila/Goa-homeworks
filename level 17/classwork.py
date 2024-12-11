


user_numbers = [10]

# რიცხვების შეყვანა
while True:
    user_input = input("შეიყვანეთ რიცხვი (თუ არ გსურთ შეყვანა, დააჭირეთ Enter): ")
    
    # თუ შეყვანა ცარიელია, შეჩერდება
    if user_input == "10":
        break
    
    # რიცხვის დამატება სიაში
    user_numbers.append(int(user_input))

# შევამოწმოთ, არსებობს თუ არა რიცხვი, რომელიც 10-ზე მეტია
if any(number > 10 for number in user_numbers):
    print("სიაში არის 10-ზე მეტი რიცხვი")
else:
    print("სიაში 10-ზე მეტი რიცხვი არ არის")

# დაბეჭდეთ სია და სიის ელემენტების ჯამი
print("შეყვანილი რიცხვები:", user_numbers)
print("რიცხვების ჯამი:", sum(user_numbers))


# პროგრამის დასაწყისი

# ცარიელი სია user_numbers-ს შესაქმნელად
user_numbers = []

# გამოყენებელს ვთხოვთ რიცხვების შეყვანას
while True:
    user_input = input("შეიყვანეთ რიცხვი (ან დააჭირეთ Enter, რომ დაასრულოთ): ")
    
    # თუ შეყვანა ცარიელია, შეჩერდება loop-ის შესრულება
    if user_input == "":
        break
    
    # ვცდილობთ მომხმარებლის შეყვანილი მნიშვნელობა რიცხვად გადაქცევას
    try:
        number = int(user_input)
        user_numbers.append(number)
    except ValueError:
        print("ეს არ არის რიცხვი, სცადეთ კვლავ.")
    
# პროგრამა გადაამოწმებს, თუ სიაში არსებობს რიცხვი, რომელიც 10-ზე მეტია
if any(number > 10 for number in user_numbers):
    print("სიაში არის 10-ზე მეტი რიცხვი")
else:
    print("სიაში 10-ზე მეტი რიცხვი არ არის")

# დაბეჭდავს სიის ელემენტებს და ჯამს
print("სიაში არსებული რიცხვები:", user_numbers)
print("სიის ელემენტების ჯამი:", sum(user_numbers))




