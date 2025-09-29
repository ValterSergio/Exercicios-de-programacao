#include <stdio.h>
#include <stdlib.h>

float obterNota(const char *mensagem) {
    float nota;
    printf("%s", mensagem);
    if (scanf("%f", &nota) != 1) {
        printf("Erro: entrada inválida.\n");
        exit(1);
    }
    return nota;
}

int validarNota(float nota) {
    return nota >= 0 && nota <= 10;
}

float calcularMedia(float notas[], int tamanho) {
    float soma = 0;
    for (int i = 0; i < tamanho; i++) {
        soma += notas[i];
    }
    return soma / tamanho;
}

const char* obterSituacaoAluno(float media) {
    if (media >= 6) {
        return "APROVADO";
    } else if (media < 6 && media > 3) {
        printf("\nAluno em Recuperação\n");
        float notaRecuperacao = obterNota("Informe a nota de recuperação: ");
        if (!validarNota(notaRecuperacao)) {
            return "REPROVADO";
        }
        return "APROVADO";
    } else {
        return "REPROVADO";
    }
}

void exibirSituacao(const char *situacao) {
    printf("Situação do Aluno: %s\n", situacao);
}

int main() {
    float notas[3];
    int qtdNotas = 3;

    for (int i = 0; i < qtdNotas; i++) {
        float nota = obterNota("Informe a nota do aluno: ");
        if (validarNota(nota)) {
            notas[i] = nota;
        } else {
            printf("Nota Inválida\n");
            exit(1);
        }
    }

    float media = calcularMedia(notas, qtdNotas);
    const char *resultado = obterSituacaoAluno(media);

    exibirSituacao(resultado);

    return 0;
}
