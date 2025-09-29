SENHA_REGISTRADA = "senha"

def obter_senha() -> str:
    return input("Informe a senha: ")

def validar_senha(senha: str) -> bool:
    return senha == SENHA_REGISTRADA

def liberar_acesso(tentativas: int) -> bool:
    while tentativas > 0:
        print(f"Tentativas Restantes: {tentativas}")
        senha = obter_senha()
        if validar_senha(senha):
            print("Acesso Concedido")
            return True
        tentativas -= 1
    print("Acesso negado")
    return False

if __name__ == "__main__":
    acesso_liberado = liberar_acesso(tentativas=3)