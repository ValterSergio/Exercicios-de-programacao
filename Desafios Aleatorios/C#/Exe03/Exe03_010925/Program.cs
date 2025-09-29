using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exe03_010925
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Var
            double n1, n2, n3, recuperacao, media;

            // entrada
            n1 = ObterNotaAluno("1");
            n2 = ObterNotaAluno("2");
            n3 = ObterNotaAluno("3");

            // processamento
            media = CalcularMedia(n1, n2, n3);
            if (media >= 6)
            {
                // saida
                Console.WriteLine("Nota Final: " + media);
                Console.WriteLine("Aluno Aprovado");
            } else if (media > 3 && media < 6)
            {
                // saida
                Console.WriteLine("Aluno em Recuperação: ");
                
                // entrada
                recuperacao = ObterNotaAluno("de recuperação");
                
                // processamento
                if (recuperacao > 5)
                {
                    // saida
                    Console.WriteLine("Nota Final: " + recuperacao);
                    Console.WriteLine("Aluno Aprovado (recuperação)");

                } else
                {
                    // saida
                    Console.WriteLine("Nota Final: " + recuperacao);
                    Console.WriteLine("Aluno Reprovado ");
                }
            } else
            {
                // saida
                Console.WriteLine("Nota Final: " + media);
                Console.WriteLine("Aluno Reprovado ");
            }
        }

        static double CalcularMedia(double n1, double n2, double n3)
        {
            return (n1 + n2 + n3) / 3.0;
        }

        static double ObterNotaAluno(string n)
        {
            // Var
            double nota;

            // Entrada
            Console.Clear();
            string msg = $"Informe a nota {n} do aluno: ";
            Console.WriteLine(msg);
            Console.SetCursorPosition(msg.Length, 0);
            nota = double.Parse(Console.ReadLine());

            // Processamento - Validar intervalo
            if (nota > 0 && nota <= 10) 
            { 
                // saida (resposta da função)
                return nota;
            }
            else 
            {
                // saida (resposta da função)
                Console.WriteLine("Erro (nota invalida): Informe apenas valores de 0-10:");
                // Encerra em caso de erro
                Environment.Exit(0);

                // apenas para evitar erro, mas nunca vai chegar aqui
                return -1;
            }
        } 
    }
}
