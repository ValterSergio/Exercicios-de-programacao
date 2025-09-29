#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define USUARIO_REGISTRADO "usuario"
#define SENHA_REGISTRADA "senha"
#define TENTATIVAS 3

void titulo(const char *texto) {
    printf("\n========================================\n");
    printf("%s\n", texto);
    printf("========================================\n");
}

void obterUsuario(char usuario[], int tamanho) {
    printf("\nDigite seu nome: ");
    scanf("%s", usuario);
}

int validarUsuario(const char usuario[]) {
    return strcmp(usuario, USUARIO_REGISTRADO) == 0;
}

void obterSenha(char senha[], int tamanho) {
    printf("\nDigite sua senha: ");
    scanf("%s", senha);
}

int validarSenha(const char senha[]) {
    return strcmp(senha, SENHA_REGISTRADA) == 0;
}

int liberarAcesso() {
    int tentativas = TENTATIVAS;
    char usuario[50], senha[50];

    titulo("LOGIN - CAIXA ELETRONICO");

    while (tentativas > 0) {
        printf("\nTentativas restantes: %d\n", tentativas);
        obterUsuario(usuario, sizeof(usuario));
        if (!validarUsuario(usuario)) {
            tentativas--;
            printf("Usuario invalido.\n");
        } else {
            while (tentativas > 0) {
                printf("\nTentativas restantes: %d\n", tentativas);
                obterSenha(senha, sizeof(senha));
                if (!validarSenha(senha)) {
                    tentativas--;
                    printf("Senha invalida.\n");
                } else {
                    printf("\nAcesso liberado com sucesso!\n\n");
                    return 1;
                }
            }
            printf("\nAcesso negado. Encerrando...\n");
            return 0;
        }
    }
    printf("\nAcesso negado. Encerrando...\n");
    return 0;
}

int validarPositivo(float n) {
    return n > 0;
}

int main() {
    if (!liberarAcesso()) {
        exit(1);
    }

    float saldo;
    printf("\nInforme o saldo inicial da conta: ");
    if (scanf("%f", &saldo) != 1 || !validarPositivo(saldo)) {
        printf("Informe apenas valores positivos.\n");
        exit(1);
    }

    while (1) {
        titulo("MENU PRINCIPAL");
        printf("1. Sacar\n2. Depositar\n3. Exibir Saldo\n0. Sair\n");
        printf("\nEscolha uma opcao (0-3): ");
        int escolha;
        if (scanf("%d", &escolha) != 1) {
            printf("Entrada invalida.\n");
            while(getchar() != '\n'); // limpa buffer
            continue;
        }

        switch (escolha) {
            case 0:
                printf("\nObrigado, volte sempre!\n");
                return 0;
            case 1: {
                float saque;
                printf("\nInforme o valor de saque: ");
                if (scanf("%f", &saque) != 1 || !validarPositivo(saque)) {
                    printf("Valor de saque invalido.\n");
                    while(getchar() != '\n');
                    continue;
                }
                if (saldo < saque) {
                    printf("Saldo insuficiente para saque.\n");
                    continue;
                }
                saldo -= saque;
                printf("Saque realizado. Saldo atual: R$ %.2f\n", saldo);
                break;
            }
            case 2: {
                float deposito;
                printf("\nInforme o valor de deposito: ");
                if (scanf("%f", &deposito) != 1 || !validarPositivo(deposito)) {
                    printf("Valor de deposito invalido.\n");
                    while(getchar() != '\n');
                    continue;
                }
                saldo += deposito;
                printf("Deposito realizado. Saldo atual: R$ %.2f\n", saldo);
                break;
            }
            case 3:
                printf("\nSaldo Atual: R$ %.2f\n", saldo);
                break;
            default:
                printf("Opcao fora do intervalo (0 a 3).\n");
        }
    }

    return 0;
}
