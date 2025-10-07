import java.util.Scanner;
import java.util.ArrayList;

class Contato {

    private String nome;
    private String numero;
    private String email;
    
    Contato(String nome, String numero, String email){
        this.nome = nome;
        this.numero = numero;
        this.email = email;
    }

    public String getNome(){
        return this.nome;
    }

    public String getNumero(){
        return this.numero;
    }

    public String getEmail(){
        return this.email;
    }
    
}


public class agenda_contato {
        
    //ponto de execução
    public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            ArrayList<Contato> contatos = new ArrayList<>();
            menuPrincipal(contatos, scanner);
    }

    // métodos principais
    public static void menuPrincipal(ArrayList<Contato> contatos, Scanner scanner){
        while (true){
            // exibir menu
            int resposta = exibirMenu(scanner);
            
            // verifica se a resposta esta dentro do intervalo
            if (!validarResposta(resposta)){
                System.out.println("Escolha Inválida, digite apenas valores entre 0 e 3.");
                continue;
            }

            switch (resposta) {
                case 0:
                    System.out.println("Saindo....");
                    System.exit(0);
                    break;
                
                case 1:
                    adicionarContato(scanner, contatos);
                    break;
                case 2:
                    removerContato(scanner, contatos);
                    break;
                case 3:
                    exibirContatos(contatos);
                    break;
                default:
                    System.out.println("Informe um número válido.");
                    break;
            }

        }

    }

    private static int exibirMenu(Scanner scanner){
        System.out.println("\n--- Menu Principal ---");
        System.out.println("1. Adicionar Contato");
        System.out.println("2. Remover Contato");
        System.out.println("3. Exibir todos os Contatos");
        System.out.println("0. Sair");
        System.out.println("------------------------");
        System.out.print("Digite um número: ");
        int resposta = scanner.nextInt();
        scanner.nextLine();
        return resposta;
    }

    public static void exibirContatos(ArrayList<Contato> contato){
        System.out.println("\n--- Exibindo contatos ---");
        int n = contato.size() - 1;
        for (int i = 0; i < n; i++){
            Contato contato2 = contato.get(i);
            System.out.println("\n-----------------------");
            System.out.println("Nome: " + contato2.getNome());
            System.out.println("Número: " + contato2.getNumero());
            System.out.println("Email: " + contato2.getEmail());
            System.out.println("-----------------------");
        }
    }
    
    public static boolean removerContato(Scanner scanner, ArrayList<Contato> contatos){
        
        String nome_contato;
        String nome_encontrado;
        Contato contato_encontrado;

        nome_contato = obterString(scanner, "Digite o nome do contato a ser removido: ");
        nome_contato.toLowerCase();
        
        int n = contatos.size();
        for (int i = 0; i < n; i++){
            contato_encontrado = contatos.get(i);
            nome_encontrado = contato_encontrado.getNome().toLowerCase();
            if (nome_encontrado.equals(nome_contato)){
                contatos.remove(i);
                System.out.println("Nome encontrado e removido.");
                return true;
            }
        }
        System.out.println("Nome não encontrado.");
        return false;
    }

    public static boolean adicionarContato(Scanner scanner, ArrayList<Contato> contatos){
        // Variaveis do método
        String nome, numero, email;
        Contato contato;

        // obtem os dados
        nome = obterNomeContato(scanner);
        numero = obterNumeroContato(scanner);
        email = obterEmailContato(scanner);

        contato = new Contato(nome, numero, email);
        contatos.add(contato);
        System.out.println("\nContato Adicionado com sucesso.");
        return true;
    }

    // Coletar entrada - nome, numero e email
    private static String obterNomeContato(Scanner scanner){
        return obterString(scanner, "Digite o nome: ");
    }

    private static String obterNumeroContato(Scanner scanner){
        return obterString(scanner, "Digite o numero: ");
    }

    private static String obterEmailContato(Scanner scanner){
        return obterString(scanner, "Digite o e-mail: ");
    }
    
    // Métodos úteis
    private static String obterString(Scanner scanner, String prompt){
        System.out.print(prompt);
        String resposta = scanner.nextLine();
        return resposta;
    }

    private static boolean validarResposta(int n){
        return n >= 0 && n <= 3;
    }

}

