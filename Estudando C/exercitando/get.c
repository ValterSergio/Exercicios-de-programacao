#include <stdio.h>

// Prototype da função (avisa o compilador que ela existe)
int get_int(void);

int main(void){
    int n;
    printf("n: ");
    n = get_int();  // recebe o valor retornado da função

    printf("\n[main] valor de n: %i", n);
    printf("\n[main] Endereco de n: %p", &n);

    return 0;
}

int get_int(void){
    int n;
    scanf("%i", &n);

    printf("\n[get_int] valor de n: %i", n);
    printf("\n[get_int] Endereco de n: %i", &n);

    return n;  // retorna o valor, não o endereço
}
