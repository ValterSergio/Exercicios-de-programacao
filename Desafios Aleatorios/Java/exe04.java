import java.util.Scanner;

public class exe04 {
    // constante com a senha registrada
    private static final String SENHA_REGISTRADA = "senha";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // liberar acesso do usuario
        boolean liberado = liberarAcesso(scanner);

        if (!liberado){
            System.out.println("ACESSO NEGADO");
            System.exit(0);
        }

        // obter saldo inicial
        System.out.print("Informe o saldo inicial da conta: ");
        double saldo = scanner.nextDouble();

        while (true) {
            int escolha = exibirMenu(scanner);
            switch (escolha) {
                
                case 1:
                    System.out.print("Informe o valor de saque: ");
                    double saque = scanner.nextDouble();
                    
                    if (!verificarPositivo(saque)){
                        System.out.println("\nInforme apenas valores positivos para saque\n");
                        break;
                    }

                    if (!verificarSaldoSuficiente(saldo, saque)){
                        System.out.println("\nSaldo Insuficiente para saque\n");
                        break;
                    }

                    System.out.println("\nRealizando saque\n");
                    saldo -= saque;
                    break;
                
                case 2:
                    System.out.print("Informe o valor para deposito: ");
                    double deposito = scanner.nextDouble();
                    
                    if (!verificarPositivo(deposito)){
                        System.out.println("\nInforme apenas valores positivos para deposito\n");
                        break;
                    }
                    
                    System.out.println("\nRealizando deposito\n");
                    saldo += deposito;
                    break;
                
                case 3:
                    System.out.println("\nSaldo Atual: " + saldo + "\n");
                    break;
                
                case 0:
                    System.out.println("\nEncerrando....");
                    System.exit(0);
                    break;

                default:
                    System.out.println("\nOpção Invalida tente novamente\n");
                    break;
            }   
        }
    }

    public static boolean verificarPositivo(double valor){
        return valor > 0;
    }

    public static boolean verificarSaldoSuficiente(double saldo, double valor){
        return saldo >= valor;
    }

    public static int exibirMenu(Scanner scanner){
        System.out.println("\n---- CAIXA ELETRONICO ----\n");
        System.out.println("1. Sacar");
        System.out.println("2. Depositar");
        System.out.println("3. Exibir Saldo");
        System.out.println("0. Encerrar");
        System.out.print("Escolha uma opção: ");
        return scanner.nextInt();
    }

    public static String obterSenha(Scanner scanner){
        return scanner.nextLine();
    }

    public static boolean liberarAcesso(Scanner scanner){
        // numero de tentativas
        short tentativas = 3;
        while (tentativas > 0){
            // obter a senha
            System.out.print("Informe a senha de acesso: ");
            String senha = obterSenha(scanner);
            if (senha.equals(SENHA_REGISTRADA)){
                return true;
            }
            // reduz o numero de tentativa e imprime o erro
            tentativas--;
            System.out.println("ERRO: Senha Invalida -> Tentativas restantes: " + tentativas);
        }

        // se chegar aqui as tentativas acabaram encerra o programa
        return false;
    }
}
