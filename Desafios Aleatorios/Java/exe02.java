import java.util.Scanner;

public class exe02 {
    public static void main(String[] args) {

        String SENHAREGISTRADA = "senha";
        String senhaUsuario; // obter a senha do usuario
        int tentativas = 3; // numero de tentativas

        // iniciar scanner
        Scanner scanner = new Scanner(System.in);

        // iniciar logica de verificação
        while (tentativas > 0) {
            System.out.println("Tentativas restantes: " + tentativas);
            System.out.print("Informe a senha: ");
            senhaUsuario = scanner.nextLine();
            if (!senhaUsuario.equals(SENHAREGISTRADA)){
                System.out.println("Senha Invalida tente novamente");
                tentativas--;
            } else {
                break;
            }
        }
        
        if (tentativas > 0){
            System.out.println("Acesso concedido");
        } else {
            System.out.println("Acesso bloqueado");
        }

        // fechar scanner
        scanner.close();
    }

}
