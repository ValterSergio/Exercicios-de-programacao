def calcular_potencia(base: int|float, expoente: int) -> int|float:
    if expoente < 1:
        return 1
    else:
        return base * calcular_potencia(base, expoente - 1)

def gerar_tabuada(expoente: int, inicio: int, fim: int) -> dict:
    tabuada = dict()
    for x in range(inicio, fim + 1):
        potencia = f"{x}^{expoente}"
        valor = calcular_potencia(x, expoente)
        tabuada[potencia] = valor
    return tabuada

def exibir_tabuada(tabuada: dict) -> None:
    print("\nExibindo Tabuada\n")
    for potencia, valor in tabuada.items():
        print(f"{potencia} = {valor}")
    print("\nFim\n")
    
def obter_expoente() -> dict:
    try:
        expoente = int(input("Informe o expoente: "))
        return {"mensagem": True, "resposta": expoente}
    except Exception as erro:
        return {"mensagem": False, "resposta": "ERRO: Informe apenas numeros inteiros.", "erro": str(erro)}

def obter_inicio_intervalo() -> dict:
    try:
        inicio = int(input("Informe o valor de inicio da tabuada: "))
        return {"mensagem": True, "resposta": inicio}
    except Exception as erro:
        return {"mensagem": False, "resposta": "ERRO: Informe apenas números inteiros.", "erro": str(erro)}
    
def obter_fim_intervalo() -> dict:
    try:
        fim = int(input("Informe o valor de fim da tabuada: "))
        return {"mensagem": True, "resposta": fim}
    except Exception as erro:
        return {"mensagem": False, "resposta": "ERRO: Informe apenas números inteiros.", "erro": str(erro)}

def menu() -> dict:
    try:
        print("1. Gerar Tabuada de Potencias.")
        print("0. Sair")
        escolha = int(input("Informe um número: "))
        if escolha >= 0 and escolha <= 1:
            return {"mensagem": True, "resposta": escolha}
        return {"mensagem": False, "resposta": "ERRO: Informe apensa números dentro do intervalo, 0 ou 1."}
    except Exception as erro:
        return {"mensagem": False, "resposta": "ERRO: Informe apenas números inteiros", "erro": str(erro)}

def executar():
    while True:
        resposta_menu = menu()
        if resposta_menu['mensagem'] is False:
            print(resposta_menu['resposta'])
            continue
        else:
            escolha = resposta_menu["resposta"]
            if escolha == 0:
                print("Finalizando programa...")
                exit(0)
            
            # por enquanto só tem uma opção, se for zero o programa encerra
            # Por isso não vou criar bloco elif ou switch
            resposta_expoente = obter_expoente()
            if resposta_expoente['mensagem'] is False:
                print(resposta_expoente['resposta'])
                print(resposta_expoente['erro'])
                continue

            resposta_inicio = obter_inicio_intervalo()
            if resposta_inicio['mensagem'] is False:
                print(resposta_inicio['resposta'])
                print(resposta_inicio['erro'])
                continue

            resposta_fim = obter_fim_intervalo()
            if resposta_fim['mensagem'] is False:
                print(resposta_fim['resposta'])    
                print(resposta_fim['erro'])
                continue    

            expoente = resposta_expoente['resposta'] # inteiro
            inicio = resposta_inicio["resposta"]
            fim = resposta_fim["resposta"]

            tabuada = gerar_tabuada(expoente, inicio, fim)
            exibir_tabuada(tabuada)
            continue

if __name__ == "__main__":
    executar()