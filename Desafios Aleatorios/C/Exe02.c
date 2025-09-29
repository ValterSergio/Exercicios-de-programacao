#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main(){

    // variaveis
    char senhaCorreta[10] = {"1234"};
    char senhaUsuario[10];
    int tentativas = 3;

    while (tentativas > 0){
        printf("Tentativas Restantes: %i\n", tentativas);
    
        // entrada
        printf("Informe a senha: ");
        fgets(senhaUsuario, sizeof(senhaUsuario), stdin); // mais seguro
        senhaUsuario[strcspn(senhaUsuario, "\n")] = 0;

        // processamento
        if (strcmp(senhaCorreta, senhaUsuario) == 0){
            printf("\nAcesso Liberado\n");
            break;
        } else {
            printf("\nAcesso Negado\n");
            tentativas--;
        }

        // limpa o buffer de entrada
        int c;
        while ((c = getchar()) != '\n' && c != EOF);
        
    }
}

