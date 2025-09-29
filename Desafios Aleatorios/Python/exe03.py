def obter_nota(msg: str) -> str:
    return input(msg)

def validar_nota(nota: str) -> bool:
    try:
        nota = float(nota)
        if nota < 0 or nota > 10:
            return False
        return True
    except Exception as erro:
        print(f"Erro: {str(erro)}")
        exit()

def calcular_media(notas: list):
    return sum(notas) / len(notas)

def obter_situacao_aluno(media: float|int) -> str:
    if media >= 6:
        return "APROVADO"
    elif media < 6 and media > 3:
        print("\nAluno em Recuperação\n")
        nota = obter_nota("Informe a nota de recuperação: ")
        if not validar_nota(nota):
            return "REPROVADO"
        return "APROVADO"
    else :
        return "REPROVADO"
    
def exibir_situacao(situacao: str) -> None:
    print(f"Situação do Aluno: {situacao}")

if __name__ == "__main__":
    # armazenar as notas do aluno
    notas = []

    # laço de repetição para obter as notas
    for x in range(3):
        # entrada
        nota = obter_nota(f"Informe a {x + 1}° nota do aluno: ")

        # validação dos dados
        if validar_nota(nota):
            notas.append(float(nota))
        else:
            print(f"Nota Invalida")
            exit()
    
    # processamento
    media = calcular_media(notas)
    resultado = obter_situacao_aluno(media)

    # Saída
    exibir_situacao(resultado)