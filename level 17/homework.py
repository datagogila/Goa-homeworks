

# მომხმარებელს ვთხოვთ რიცხვების შეყვანას, რომლებიც გამოყოფილია virgula-ს მეშვეობით
user_input = input("შეიყვანეთ რიცხვები (გამოიყენეთ virgula, მაგალითად: 1, 2, 3, 4): ")

# რიცხვების დაყოფა virgula-ს მიხედვით და თითოეული ელემენტის გარდაქმნა int ტიპად
numbers = [int(num.strip()) for num in user_input.split(",")]

# სიის რიცხვების ჯამი
total_sum = sum(numbers)

# დაბეჭდვა
print("რიცხვების ჯამი:", total_sum)

# პროგრამა: რიცხვების ნაყარი შეკრება

# სიაში შევინახავთ რიცხვებს
numbers = []

# პირველი რიცხვის შეყვანა
first_number = input("შეიყვანეთ პირველი რიცხვი: ")
numbers.append(int(first_number))

# შემდეგი რიცხვების შესატანად, რომლებიც შეყვანილია უსასრულოდ
while True:
    user_input = input("შეიყვანეთ რიცხვი (ან დააჭირეთ Enter, რომ დასრულდეს): ")
    
    # თუ მომხმარებელი არაფერს შეჰყავს და უბრალოდ დააჭერს Enter-ს, მაშინ ციკლი შეწყდება
    if user_input == "":
        break
    
    # რიცხვი ვამატებთ სიაში
    numbers.append(int(user_input))

# დაბეჭდავს რამდენი რიცხვი შეიყვანა მომხმარებელმა
print("მომხმარებელმა შეიყვანა", len(numbers), "რიცხვი.")