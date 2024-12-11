#რა არის conditional statements
#პროგრამირების ერთერთი ძირითადი კონცეფციაა.ისინი ეხმარება პროგრამას მიიღოს გადაწყვეტილება: თუ კონკრეტული პირობა (მართალია)მაშინ გარკვეული 
#მოქმედება უნდა მოხდეს. თუ პირობა არ შესრულდება (არ არის მართალი)შეიძლება სხვა მოქმედება განხორციელდეს

# პროგრამირებაში "if" არის სინტაქსის ნაწილი,if ერთ-ერთი ყველაზე მნიშვნელოვანი კონსტრუქცია, რომელიც გამოიყენება პროგრამის ლოგიკის განხორციელებისთვის.
# "if" statement (ან "if"-განცხადება) საშუალებას გვაძლევს შევამოწმოთ გარკვეული პირობა და მხოლოდ მაშინ შევასრულოთ კოდის გარკვეული ნაწილი,
#  თუ ეს პირობა ჭეშმარიტია

#„elif“ არის Python-ის პროგრამირების ენის კონსტრუქტი, რომელიც წარმოადგენს „else if“-ის კომბინაციას. ეს გამოიყენება, როდესაც გვსურს
#  შევამოწმოთ რამდენიმე პირობა ერთდროულად და ერთ-ერთი მათგანის შეუსრულებლობის შემთხვევაში გადავიდეთ შემდეგ პირობაში.
#გაითვალისწინე, რომ elif-ის გამოყენებისას, თუ პირველი პირობა (თუ if-ი) არ შესრულდა, ხდება შემდეგი პირობის შემოწმება




# ასაკის განსაზღვრა
# შექმენი პროგრამა, რომელიც მომხმარებელს სთხოვს ასაკის შეყვანას და შემდეგ განსაზღვრავს, არის თუ არა ადამიანი მცირეწლოვანი, მოზარდი თუ ზრდასრული.

 
# ინსტრუქციები:
# თუ ასაკი 13-ზე ნაკლებია, დაბეჭდე „მცირეწლოვანი“.
# თუ ასაკი 13-დან 19-მდეა, დაბეჭდე „მოზარდი“.
# თუ ასაკი 20-ზე მეტია, დაბეჭდე „ზრდასრული“.

age = int(input('Enter your age: '))

if age < 13:
    print('მცირეწლოვანი')
elif age > 13 and age < 19:
    print('მოზარდი')
elif age > 20:
    print('ზრდასრული')





# რიცხვის დადებითობა ან უარყოფითობა
# პროგრამა სთხოვს მომხმარებელს რიცხვის შეყვანას და შემდეგ ადგენს, არის თუ არა რიცხვი დადებითი, უარყოფითი თუ ნული.

 
# ინსტრუქციები:
# თუ რიცხვი ნულია, დაბეჭდე „ნულია“.
# თუ რიცხვი ნულზე მეტია, დაბეჭდე „დადებითი რიცხვია“.
# თუ რიცხვი ნულზე ნაკლებია, დაბეჭდე „უარყოფითი რიცხვია“.

number = int(input('Enter number: '))

if number == 0:
    print('ნულია')
elif number > 0:
    print('დადებითი რიცხვია')
elif number < 0:
    print('უარყოფითი რიცხვია')


#პროდუქტზე ფასდაკლების განსაზღვრა
if ("price") > 50:
      discount = ("price") * 0.20 # 20% 
#ფასდაკლებაა
     final_price = price - discount
print(f"ფასდაკლება 20%")
#საბოლოო ფასი არის {final_price} ლარი.")
("elif") price >= 20 and price <= 50: 
discount = price * 0.05 # 5%
#ფასდაკლებაა
final_price = ("price") - discount
print(f"ფასდაკლება5%")
#საბოლოო ფასი არის {final_price}
#ლარი.:)
("else")
print("ფასდაკლება არ გამოიყენება. საბოლოოარ არის")
#price, "ლარი.")