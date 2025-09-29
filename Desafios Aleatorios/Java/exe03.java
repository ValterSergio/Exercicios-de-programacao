import java.util.Scanner;

public class exe03 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        
        // array para obter notas
        double[] notas = new double[3];
        
        // guardar o valor para validação
        double nota;
        
        // guardar o valor da média para verificar sitação
        double media;

        // loop para coletar as notas
        for (int i = 0; i < notas.length; i++){
            String msg = "Informe a " + (i + 1) + "° nota do aluno: ";
            nota = obterNota(scanner, msg);
        
            // validar a nota, se não for valida encerra
            if (!validarNota(nota)){
                System.out.println("Nota invalida");
                System.exit(0);
            }

            // adiciona a nota no array
            notas[i] = nota;
        }

        // calcular a média
        media = calcularMedia(notas);

        // verificar se aluno foi aprovado
        if (verificarAprovado(media)){
            System.out.println("APROVADO");
            System.exit(0);
        }

        // verificar se aluno esta em recuperacao
        if (verificarRecuperacao(media)){
            
            // obter nota recuperação
            nota = obterNota(scanner,"Informe a nota de recperação: ");

            // validar nota de recuperação
            if (!validarNota(nota)){
                System.out.println("Nota invalida");
                System.exit(0);
            }

            // se maior que 5 imprime aprovado
            if (nota > 5){
                System.out.println("APROVADO");
                System.exit(0);
            }

            // se não atingiu, imprime reprovado
            System.out.println("REPROVADO");
            System.exit(0);
        }

        // verificar se aluno esta reprovado
        if (verificarReprovado(media)){
            System.out.println("REPROVADO");
            System.exit(0);
        }
    }

    public static double obterNota(Scanner scanner, String mensagem){
        System.out.print(mensagem);
        return scanner.nextDouble();
    }

    public static boolean validarNota(double nota){
        if (nota < 0 || nota > 10){
            return false;
        }
        return true;
    }

    public static double calcularMedia(double[] notas){
        double media = 0;
        for (int i = 0; i < notas.length; i++){
            media += notas[i];
        }
        return media / notas.length;
    }

    public static boolean verificarRecuperacao(double media){
        return media < 6 && media > 3;
    }

    public static boolean verificarAprovado(double media){
        return media >= 6;
    }

    public static boolean verificarReprovado(double media){
        return media <= 3;
    }
}