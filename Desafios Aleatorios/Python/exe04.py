USUARIO_REGISTRADO = "usuario"
SENHA_REGISTRADA = "senha"
TENTATIVAS = 3

def titulo(texto: str):
    print("\n" + "=" * 40)
    print(texto.center(40))
    print("=" * 40)

def obter_usuario() -> str:
    return input("\nDigite seu nome: ")

def validar_usuario(nome: str) -> bool:
    return nome == USUARIO_REGISTRADO

def obter_senha() -> str:
    return input("\nDigite sua senha: ")

def validar_senha(senha: str) -> bool:
    return senha == SENHA_REGISTRADA

def liberar_acesso() -> bool:
    tentativas = TENTATIVAS
    titulo("LOGIN - CAIXA ELETRONICO")
    
    while tentativas:
        print(f"\nTentativas restantes: {tentativas}")
        usuario = obter_usuario()
        
        if not validar_usuario(usuario):
            tentativas -= 1
            print("Usuario invalido.")
        else:
            while tentativas:
                print(f"\nTentativas restantes: {tentativas}")
                senha = obter_senha()
                if not validar_senha(senha):
                    tentativas -= 1
                    print("Senha invalida.")
                else:
                    print("\nAcesso liberado com sucesso!\n")
                    return True
            print("\nAcesso negado. Encerrando...\n")
            return False
    
    print("\nAcesso negado. Encerrando...\n")
    return False

def exibir_menu() -> str:
    titulo("MENU PRINCIPAL")
    print("1. Sacar")
    print("2. Depositar")
    print("3. Exibir Saldo")
    print("0. Sair")
    return input("\nEscolha uma opcao (0-3): ")

def validar_escolha(escolha: str) -> bool:
    try:
        escolha = int(escolha)
        if escolha < 0 or escolha > 3:
            print("Opcao fora do intervalo (0 a 3).")
            return False
        return True
    except ValueError:
        print("Entrada invalida. Digite um numero.")
        return False

def validar_positivos(n: float|int) -> bool:
    return n > 0

if __name__ == "__main__":
    if not liberar_acesso():
        exit()
    
    try:
        saldo = float(input("\nInforme o saldo inicial da conta: "))
        if not validar_positivos(saldo):
            print("Informe apenas valores positivos.")
            exit()
    except Exception as erro:
        print(f"Erro: {str(erro)}")
        exit()

    while True:
        escolha = exibir_menu()
        if not validar_escolha(escolha):
            print("Tente novamente.")
            continue

        escolha = int(escolha)

        match escolha:
            case 0:
                print("\nObrigado, volte sempre!\n")
                break
            case 1:
                try:
                    saque = float(input("\nInforme o valor de saque: "))
                    if not validar_positivos(saque):
                        print("Valor de saque deve ser positivo.")
                        continue
                    if saldo < saque:
                        print("Saldo insuficiente para saque.")
                        continue
                    saldo -= saque
                    print(f"Saque realizado. Saldo atual: R$ {saldo:,.2f}")
                except ValueError:
                    print("Entrada invalida.")
            case 2:
                try:
                    deposito = float(input("\nInforme o valor de deposito: "))
                    if not validar_positivos(deposito):
                        print("Valor de deposito deve ser positivo.")
                        continue
                    saldo += deposito
                    print(f"Deposito realizado. Saldo atual: R$ {saldo:,.2f}")
                except ValueError:
                    print("Entrada invalida.")
            case 3:
                print(f"\nSaldo Atual: R$ {saldo:,.2f}\n")
