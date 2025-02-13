def solution(string):
    return string[::-1]


def area_or_perimeter(l , w):
    if l == w:
        return l * w 
    else:
        return 2 * (l + w)  
    

def make_negative( number ):
    return -abs(number)


def opposite(number):
    return -number  
