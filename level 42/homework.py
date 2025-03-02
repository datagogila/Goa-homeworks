def set_alarm(employed, vacation):
    if employed and not vacation:
        return True
    else:
        return False
    

def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"