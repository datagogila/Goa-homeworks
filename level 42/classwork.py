def mouth_size(animal):
    return "small" if animal.lower() == "alligator" else "wide"


def past(h, m, s):
    return (h * 3600000) + (m * 60000) + (s * 1000)