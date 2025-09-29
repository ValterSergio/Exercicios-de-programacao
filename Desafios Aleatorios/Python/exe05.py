
n = 3
somar = 0

for x in range(n):
    try:
        nota = int(input(f"Informe o {(1 + x)}° tempo: "))
    except ValueError:
        print("Erro: você deve digitar um número inteiro.")
        exit(1) 

    # valida a entrada fornecida
    if nota <= 0:
        print("Tempo inválido: o tempo deve ser maior que 0.")
        exit(1) 

    # soma a entrada do usuario
    somar += nota

# calcular a media 
media = float(somar) / n

# exibir o resultado
if media <= 10:
    print("CATEGORIA OURO")
elif media <= 15:
    print("CATEGORIA PRATA")
elif media <= 20:
    print("CATEGORIA BRONZE")
else:
    print("DESCLASSIFICADO")
