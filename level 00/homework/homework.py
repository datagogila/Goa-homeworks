from turtle import*
speed(7)
width(7)
color("black")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#end of square

#drawing a door

forward(70)
color("red")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()

color("green")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(150,150)
pendown()
left(120)
begin_fill()
color("blue")
forward(30)
left(90)

forward(30)
left(90)

forward(30)
left(90)

forward(30)
left(90)
end_fill()

penup()
goto(50,150)
pendown()

left(180)
#end a window

#drawing a window
begin_fill()
forward(30)
left(270)

forward(30)
left(270)

forward(30)
left(270)

forward(30)
left(270)
end_fill()

exitonclick()