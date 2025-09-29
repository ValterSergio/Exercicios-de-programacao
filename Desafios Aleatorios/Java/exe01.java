import java.util.Scanner;

public class exe01 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double salario;
        int tempo;
        float desempenho;
        int bonusTempo;
        int bonusDesempenho;

        salario = ObterSalario(scanner);
        if (!ValidarSalario(salario)){
            System.exit(1);
        }

        tempo = ObterTempoServico(scanner);
        if (!ValidarTempoServico(tempo)){
            System.exit(1);
        }

        desempenho = ObterNotaDesempenho(scanner);
        if (!ValidarNotaDesempenho(desempenho)){
            System.exit(1);
        }

        bonusTempo = CalcularBonusTempo(tempo);
        bonusDesempenho = CalcularBonusDesempenho(bonusTempo, desempenho);

        ExibirResultado(salario, bonusDesempenho);

        scanner.close();
    }

    public static void ExibirResultado(double salario, int bonusDesempenho){
        if (bonusDesempenho == 0){
            System.out.println("Sem direito a bônus");
        } else {
            double bonusFinal = salario * (bonusDesempenho / 100.0);
            System.out.println("Bônus Final: " + bonusFinal);
        }
    }

    public static int CalcularBonusDesempenho(int bonusTempo, float notaDesempenho){
        if (notaDesempenho < 4){
            return 0;
        } else if (notaDesempenho >= 4 && notaDesempenho <= 7){
            return bonusTempo;
        } else {
            return bonusTempo * 2;
        }
    }

    public static int CalcularBonusTempo(int tempo){
        if (tempo < 3){
            return 0;
        } else if (tempo >= 3 && tempo <= 5){
            return 5;
        } else {
            return 10;
        }
    }

    public static double ObterSalario(Scanner scanner) {
        System.out.print("Informe o salario Base do funcionario: ");
        return scanner.nextDouble();
    }

    public static boolean ValidarSalario(double salario){
        if (salario <= 0){
            System.out.println("ERRO: Salário não pode ser negativo.");
            return false;
        }
        return true;
    }

    public static int ObterTempoServico(Scanner scanner){
        System.out.print("Informe o tempo de serviço: ");
        return scanner.nextInt();
    }

    public static boolean ValidarTempoServico(int tempo){
        if (tempo < 0){
            System.out.println("ERRO: Tempo de serviço não pode ser negativo.");
            return false;
        }
        return true;
    }

    public static float ObterNotaDesempenho(Scanner scanner){
        System.out.print("Informe a nota de desempenho: ");
        return scanner.nextFloat();
    }

    public static boolean ValidarNotaDesempenho(float nota){
        if (nota < 0 || nota > 10){
            System.out.println("ERRO: Nota de desempenho deve estar entre 0 e 10.");
            return false;
        }
        return true;
    }
}
