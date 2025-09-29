using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exe04_040925
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Criar cliente ficticio
            string clienteRegistrado;
            string senhaRegistrada;

            // controlar o acesso do cliente
            bool acessoLiberado;

            // obter dados de acesso do cliente
            string obterCliente;
            string obterSenha;

            // controlar o numero de tentativas de acesso
            int totalTentativas;

            // Controlar o saldo do cliente
            double saldoInicial;
            double saldoAtual;
            double valorDeposito;
            double valorSaque;

            // menu de opções do caixa eletronico
            short opcaoCaixa;

            // criando cliente ficticio
            clienteRegistrado = "usuario";
            senhaRegistrada = "senha";

            // Bloqueando o acesso 
            acessoLiberado = false;

            //definindo o total de tentativas
            totalTentativas = 3;

            // validar cliente
            while (totalTentativas > 0)
            {
                Console.WriteLine("Tentativas Restantes: " + totalTentativas);
                Console.WriteLine("Digite seu nome: ");
                obterCliente = Console.ReadLine();

                // verificar se o nome do usuario está registrado
                if (obterCliente.Equals(clienteRegistrado))
                {
                    while (totalTentativas > 0)
                    {
                        Console.WriteLine("Tentativas Restantes: " + totalTentativas);
                        Console.WriteLine("Digite sua senha: ");
                        obterSenha = Console.ReadLine();

                        // verificar se a senha está correta
                        if (obterSenha.Equals(senhaRegistrada))
                        {
                            Console.WriteLine("Acesso Liberado");
                            acessoLiberado = true;
                            totalTentativas = 0;
                            break;
                        } else
                        {
                            Console.WriteLine("Senha Inválida");
                            totalTentativas--;
                        }
                    }
                } else
                {
                    Console.WriteLine("Cliente Inválido");
                    totalTentativas--;
                }
            }

            // quando sair do loop verfica se o acesso está liberado
            if (!acessoLiberado)
            {
                Console.WriteLine("Acesso negado: Senha ou usuario invalido");
                Environment.Exit(-1);
            }

            Console.WriteLine("Informe o saldo inicial: ");
            saldoInicial = double.Parse(Console.ReadLine());
            saldoAtual = saldoInicial;
            opcaoCaixa = 1;

            while (opcaoCaixa > 0)
            {
                Console.WriteLine("1. Sacar");
                Console.WriteLine("2. Depositar");
                Console.WriteLine("3. Ver Saldo");
                Console.WriteLine("0. Sair");
                Console.WriteLine("Escolha uma opção: ");
                opcaoCaixa = short.Parse(Console.ReadLine());

                if (opcaoCaixa == 0)
                {
                    Console.WriteLine("Obrigado volte sempre !!!");
                    break;
                } else if (opcaoCaixa == 1)
                {
                    Console.WriteLine("Informe o valor do Saque: ");
                    valorSaque = double.Parse(Console.ReadLine());
                    if (valorSaque > 0)
                    {
                        if (valorSaque < saldoAtual)
                        {
                            saldoAtual -= valorSaque;
                            Console.WriteLine("Sacando Dinheiro");
                        } else
                        {
                            Console.WriteLine("Valor de Saque deve ser maior que o saldo atual");

                        }
                    } else
                    {
                        Console.WriteLine("Valor para saque deve ser maior que 0");
                    }
                } else if (opcaoCaixa == 2)
                {
                    Console.WriteLine("Informe o valor para deposito: ");
                    valorDeposito = double.Parse(Console.ReadLine());

                    if (valorDeposito > 0)
                    {
                        saldoAtual += valorDeposito;
                        Console.WriteLine("Depositando Dinheiro");
                    } else
                    {
                        Console.WriteLine("Valor para deposito deve ser maior que 0");
                    }
                } else if (opcaoCaixa == 3)
                {
                    Console.WriteLine("Saldo Atual: " + saldoAtual);
                } else
                {
                    Console.WriteLine("Opção Inválida");
                }
            }
        }
    }
}
