#მომხმარებელმა უნდა შეიყვანოს ტექსტი. პროგრამა შეასრულებს შემდეგ ნაბიჯებს:

#ტექსტის ყველა სიმბოლოს მცირე ასოებად გადაკეთება.
#ტექსტის ყველა სიმბოლოს დიდი ასოებად გადაკეთება.
#ტექსტის მხოლოდ პირველი სიმბოლოს გადაქცევა დიდ ასოდ, დანარჩენები დარჩება პატარა ასოებად.
#მოძებნოს მომხმარებლის მიერ შერჩეული სიტყვა ტექსტში და დააბრუნოს მისი პირველი ნახვის ინდექსი.


def process_text():

    text = input("შეიყვანეთ ტექსტი: ")
    word_to_find = input("შეიყვანეთ საძიებო სიტყვა: ")

    lowercase_text = text.lower()
    print("პატარა ასოები:", lowercase_text)

    uppercase_text = text.upper()
    print("დიდი ასოები:", uppercase_text)

    capitalized_text = text.capitalize()
    print("პირველი ასო დიდი:", capitalized_text)

    index = text.find(word_to_find)
    if index != -1:
        print("სიტყვა '{word_to_find}' მოიძებნა, პირველი ნახვის ინდექსი: {index}")
    else:
        print("სიტყვა '{word_to_find}' არ მოიძებნა.")


