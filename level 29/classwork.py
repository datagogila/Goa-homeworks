list = [8, 4, 2, 6]
list.remove(2)
print(len(list)+list.count(6))
#4
#პირველი ხაზი: list = [8, 4, 2, 6] – ქმნის სიას, რომელშიც არის ოთხი ელემენტი: 8, 4, 2, 6.

##მეორე ხაზი: list.remove(2) – ამოშლის პირველ ნომინალურ 2 სიიდან. ახლა სია ასე გამოიყურება: [8, 4, 6].

#მესამე ხაზი: len(list) – ამოწმებს სიაში ელემენტების რაოდენობას. სია შეიცავს 3 ელემენტს: [8, 4, 6], ამიტომ len(list) არის 3.

#მეოთხე ხაზი: list.count(6) – ითვლის რამდენჯერ არის სიაში ნომინალური 6. სია შეიცავს 6 მხოლოდ ერთხელ, ამიტომ list.count(6) არის 1.


# Initialize the queue
queue = ['john', 'any', 'bob', 'adam']

# Take input from the user
new_item = input("Enter an item to add to the queue: ")

# Add the new item to the end of the queue
queue.append(new_item)

# Output the resulting queue
print("Updated queue:", queue)


#exiting queue
#qeue = [list'john' 'any' 'bob' 'adam']
#take input from the User

#add the inputg item to the end of the queue

#output the resultin 

#queue-ის შექმნა: ვიწყებთ სიას, რომელიც შეიცავს ელემენტებს ['john', 'any', 'bob', 'adam']. ეს არის ჩვენი queue.


#მომხმარებლის მონაცემების მიღება: გამოიყენება input() ფუნქცია, რათა მომხმარებელს მივცეთ საშუალება, შეიტანოს ახალი ელემენტი, რომელიც უნდა დაემატოს queue-ს.

#ახალი ელემენტის დამატება: append() მეთოდის საშუალებით, რომელიც ატვირთავს ახალ ელემენტს queue-ის ბოლოს.

#განახლებული queue-ის ჩვენება: ბოლოს, ვიძახებთ print()-ს, რომ ვაჩვენოთ განახლებული queue