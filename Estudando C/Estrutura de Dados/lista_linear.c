#include <stdio.h>
#include <stdbool.h>
#include <malloc.h>
#include <stdlib.h>

#define MAX 50 // tamanho máximo da lista

typedef int TIPOCHAVE;

typedef struct {
    TIPOCHAVE chave;
} REGISTRO;

typedef struct {
    REGISTRO A[MAX];
    int nroElem;
} LISTA;

// --- Protótipos ---
void iniciarLista(LISTA* l);
int retornarNumeroDeElementos(LISTA* l);
void exibirElementos(LISTA* l);
int buscaSequencialElemento(LISTA* l, TIPOCHAVE alvo);
bool inserirElemento(LISTA* l, REGISTRO reg, int posicao);
bool excluirElemento(TIPOCHAVE alvo, LISTA* l);
void exibirMenu();
int obterRespostaMenu();
bool criarNovoElemento(LISTA* lista);
bool apagarRegistro(LISTA* lista);
bool localizarRegistro(LISTA* lista);

// --- MAIN ---
int main(void) 
{
    LISTA lista;
    int respostaMenu;

    iniciarLista(&lista);

    while (true)
    {
        respostaMenu = obterRespostaMenu();
        if (respostaMenu == 1)
        {
            printf("\nCriando um Registro.\n");
            criarNovoElemento(&lista);
        }
        else if (respostaMenu == 2)
        {
            printf("\nRemovendo um Registro.\n");
            apagarRegistro(&lista);
        }
        else if (respostaMenu == 3)
        {
            printf("\nExibindo todos os valores guardados.\n");
            exibirElementos(&lista);
        }
        else if (respostaMenu == 4)
        {
            printf("\nBuscando Elementos.\n");
            localizarRegistro(&lista);
        }
        else if (respostaMenu == 5)
        {
            printf("\nResetando a lista.\n");
            iniciarLista(&lista);
        }
        else if (respostaMenu == 6)
        {
            printf("\nObrigado, Volte sempre.\n");
            return 0;
        }
        else
        {
            printf("\nResposta invalida.\n");
        }
    }
    return 0;
}

// --- Funções ---
void iniciarLista(LISTA* l) {
    l->nroElem = 0;
}

int retornarNumeroDeElementos(LISTA* l){
    return l->nroElem;
}

void exibirElementos(LISTA* l)
{
    printf("Lista: [ ");
    for (int i = 0; i < l->nroElem; i++)
    {
        printf("%i ", l->A[i].chave);
    }
    printf(" ];\n");
}

int buscaSequencialElemento(LISTA* l, TIPOCHAVE alvo)
{
    int i = 0;
    while (i < l->nroElem)
    {
        if (alvo == l->A[i].chave)
        {
            printf("\nElemento Localizado: %i.\nPosicao %i.\n", l->A[i].chave, i);
            return i;
        } 
        i++;
    }
    printf("\nElemento Nao Localizado.\n");
    return -1;
}

bool inserirElemento(LISTA* l, REGISTRO reg, int posicao)
{
    if (l->nroElem == MAX)
    {
        printf("\nEspaco Insuficiente Para Armazenamento.\n");
        return false;
    } 
    else if ((posicao < 0) || (posicao > l->nroElem))
    {
        printf("\nErro: Informe uma posicao entre 0 e %i\n", l->nroElem);
        return false;
    } 
    else 
    {
        for (int j = l->nroElem; j > posicao; j--)
        {
            l->A[j] = l->A[j - 1];
        }
        l->A[posicao] = reg;
        l->nroElem++;
        return true;
    }
}

bool excluirElemento(TIPOCHAVE alvo, LISTA* l){
    int pos = buscaSequencialElemento(l, alvo);
    if (pos == -1){
        return false;
    }

    for (int j = pos; j < l->nroElem - 1; j++){
        l->A[j] = l->A[j + 1];
    }
    l->nroElem--;
    return true;
}

void exibirMenu(){
    printf("\n--- Gerenciar Lista Sequencial ---\n");
    printf("1. Adicionar Elemento.\n");
    printf("2. Remover Elemento.\n");
    printf("3. Exibir Elementos.\n");
    printf("4. Procurar Elemento.\n");
    printf("5. Resetar Lista.\n");
    printf("6. Sair\n");
}

int obterRespostaMenu()
{
    int n;
    exibirMenu();
    printf("\nEscolha uma opcao: ");
    scanf("%i", &n);
    if (n >= 1 && n <= 6){
        return n;
    }
    return -1;
}

bool criarNovoElemento(LISTA* lista){
    REGISTRO registro;
    int posicao; 
    int n; 

    printf("\nInforme o numero a ser guardado: ");
    scanf("%i", &n);
    registro.chave = n;
    printf("\nInforme a posicao para guardar o elemento: ");
    scanf("%i", &posicao);
    return inserirElemento(lista, registro, posicao);
}

bool apagarRegistro(LISTA* lista)
{
    int alvo;
    printf("\nInforme o valor a ser apagado: ");
    scanf("%i", &alvo);
    if (excluirElemento(alvo, lista))
    {
        printf("\nValor alvo Removido com sucesso.\n");
        return true;
    }
    printf("\nErro: Remocao nao realizada.\n");
    return false;
}

bool localizarRegistro(LISTA* lista)
{
    int alvo;
    printf("\nInforme o valor que deseja encontrar: ");
    scanf("%i", &alvo);
    buscaSequencialElemento(lista, alvo);
    return true;
}
