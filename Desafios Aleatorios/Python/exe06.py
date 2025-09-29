from os import system

def limpar_terminal():
    system("cls||clear")

if __name__ == "__main__":
    # variaveis
    usuario_registrado = "usuario"
    senha_registrada = "senha"
    pergunta_seguranca = "2x - 50 = 50"
    resposta_seguranca = "50"
    acesso_liberado = False
    tentativas = 3

    for x in range(tentativas):
        nome = input("Digite o nome: ")
        if nome.lower() != usuario_registrado:
            print(f"Nome não registrado: tentativas restantes: {tentativas - 1}")
            tentativas -= 1
            continue
        

        for y in range(tentativas):
            senha = input("Digite a senha: ")
            if senha != senha_registrada:
                print(f"Senha invalida: tentativas restantes: {tentativas - 1}")
                tentativas -= 1
                continue

            acesso_liberado = True
            break
        break

if acesso_liberado:
    print("ACESSO LIBERADO")
else:
    print("ACESSO NEGADO")