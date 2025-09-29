import java.util.Scanner;

public class exe05 {
    public static void main(String[] args) {
        
        int n = 3;
        Scanner scanner = new Scanner(System.in);
        int somar = 0;

        for (int i = 0; i < n; i++) {
            System.out.print("Informe o " + (i+1) + "° tempo: ");
            int nota = scanner.nextInt();
            if (nota <= 0) {
                System.out.println("Valor inválido. Informe apenas números inteiros maiores que 0.");
                System.exit(1);
            }
            somar += nota;
        }

        scanner.close();

        double media = (double) somar / n;
        if (media <= 10) {
            System.out.println("CATEGORIA OURO");
        } else if (media <= 15) {
            System.out.println("CATEGORIA PRATA");
        } else if (media <= 20) {
            System.out.println("CATEGORIA BRONZE");
        } else {
            System.out.println("CATEGORIA DESCLASSIFICADO");
        }
    }
}
