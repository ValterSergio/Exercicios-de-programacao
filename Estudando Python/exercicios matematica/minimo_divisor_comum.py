"""
Crie um algoritmo que calcule o menor multiplo comum entre dois números
"""

# Usar a formula:
#     mmc(a, b) = a * b / mdc(a, b)

def calcular_mdc(a: int, b: int) -> int:
    # definimos o maior valor como dividendo
    if a > b:
        dividendo = a
        divisor = b
    else:
        dividendo = b
        divisor = a
    
    while True:
        resto = dividendo % divisor
        if resto == 0:
            return divisor
        elif resto > 0:
            dividendo = divisor
            divisor = resto

def calcular_mmc(a, b):
    return (a * b) // calcular_mdc(a, b)

if __name__ == "__main__":
    n1 = 987654321123456789
    n2 = 123456789987654321
    print(f"Minimo Divisor Comum de {n1, n2}: {calcular_mmc(n1, n2):,}")