def mdc(a: int, b: int) -> int:

    if a > b:
        dividendo = a
        divisor = b
    else:
        dividendo = b
        divisor = a
    
    while (True):
        resto = dividendo % divisor
        if resto == 0:
            return divisor

        dividendo = divisor
        divisor = resto
    
def mmc(a: int, b: int):
    return a * b // mdc(a, b)

def buscar_multiplo(lista: list[int]):
    
    resultado = 1 # apenas para evitar On²
    for x in lista:
        resultado = mmc(resultado, x)
    return resultado

if __name__ == "__main__":
    lista = sorted([18, 59, 65, 98, 15, 12, 13, 7, 123, 357])
    print(lista)
    resultado = buscar_multiplo(lista)
    print(f"O Menor numero ue pode ser dividido por cada um dos elementos da lista sem qualquer resto: {resultado}")