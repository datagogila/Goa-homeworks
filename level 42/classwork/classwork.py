def mouth_size(animal):
    return "small" if animal.lower() == "alligator" else "wide"


def past(h, m, s):
    return (h * 3600000) + (m * 60000) + (s * 1000)

def replace_exclamation(st):
    return ''.join('!' if c in 'aeiouAEIOU' else c for c in st)

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
        pos = 0
        neg = 0
        
        for x in arr:
            if x > 0:
                pos += 1
            if x < 0:
                neg += x
        
        return [pos,neg]