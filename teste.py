players = ["Abacate", "Cenoura", "Melancia", "Rozbife", "Canelinha", "Estranho"]
round = 1


def column(fac, p1):
    global round

    for i in players:
        if fac > 1:
            fac -= 1
            continue
        else:
            p2 = i
            print(round, p1, p2)
            round += 1


def line():
    # fator de deslocamento da lista de jogadores
    fac = 2 # Começa em 2 para pular as rodadas com jogadores repetidos
    for i in players:
        p1 = i
        column(fac, p1)
        fac += 1


line()
