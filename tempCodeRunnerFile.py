players = ["Abacate", "Cenoura", "Melancia", "Rozbife", "Canelinha"]
r = 1

def column(fac, p1):
    for i in players:
        if fac > 0:
            fac -= 1
            continue
        else:
            print(r, p1, i)
            r += 1

def line():
    fac = 0
    for i in players:
        p1 = i
        column(fac, p1)
        fac += 1

line()
