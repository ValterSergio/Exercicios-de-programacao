#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 3; // total de notas
    
    int *tempos = malloc(sizeof(int) * n);
    if (tempos == NULL) {
        printf("Erro de alocacao de memoria\n");
        return 1;
    }

    int somar = 0; // variavel inteira para acumular soma

    for (int i = 0; i < n; i++) {
        printf("Informe o %i° tempo do atleta: ", i+1);
        scanf("%i", &tempos[i]);

        if (tempos[i] < 0) {
            printf("Informe apenas numeros inteiros positivos.\n");
            free(tempos);
            exit(1);
        }

        somar += tempos[i]; // soma os valores
    }

    double media = (double) somar / n;
    printf("A media dos tempos eh: %.2f\n", media);

    if (media <= 10){printf("CATEGORIA OURO");} 
    else if (media <= 15){printf("CATEGORIA PRATA");}
    else if (media <= 20){printf("CATEGORIA BRONZE");}
    else {printf("DESCLASSIFICADO");}

    free(tempos);
    return 0;
}
