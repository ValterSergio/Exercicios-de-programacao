def obter_salario() -> float:
    salario = float(input("Informe o salario: "))
    if salario <= 0:
        print("Erro: Dados Invalidos, salario deve ser maior que 0.")
        exit()
    return salario

def obter_tempo_servico() -> int:
    tempo = int(input("Informe o tempo de serviço: "))
    if tempo < 0:
        print("Erro: Dados Invalidos, Tempo de Serviço não pode ser negativo.")
        exit()
    return tempo

def obter_nota_desempenho() -> float:
    # considerando que essa nota pode ser um valor decimal
    # Exemplo: 9.5
    nota = float(input("Informe a nota de desempenho: "))
    if nota < 0 or nota > 10:
        print("Erro: Dados invalidos, Nota de desempenho deve estar entre 0 e 10.")
        exit()
    return nota

def calcular_bonus_tempo(tempo: int) -> int:
    if tempo < 3:
        return 0
    elif tempo >= 3 and tempo <= 5:
        return 5
    else:
        return 10

def calcular_bonus_nota(nota: float, bonus_tempo: int) -> int:
    if nota < 4:
        return 0
    elif nota >= 4 and nota <= 7:
        return bonus_tempo
    else:
        return bonus_tempo * 2

def exibir_resultado(salario: float, bonus: int) -> None:
    if bonus == 0:
        print("Sem direito a bônus.")
        return
    bonus_final = salario * (bonus / 100)
    print(f"Bônus final: {bonus_final:,.2f}")

if __name__ == "__main__":
    # entrada e validação das entradas
    salario = obter_salario()
    tempo = obter_tempo_servico()
    nota = obter_nota_desempenho()

    # Processamento
    bonus_tempo = calcular_bonus_tempo(tempo)
    bonus_nota = calcular_bonus_nota(nota, bonus_tempo)

    # saida 
    exibir_resultado(salario, bonus_nota)