using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exe09_PRL_030925
{
    internal class Program
    {
        static void Main(string[] args)
        {

            // var
            const double CIP = 29.98;
            int kwh;
            double consumo;
            double icms;
            double cofins;
            double pispaseb;
            double valor;

            // inicio
            Console.Clear();
            Console.WriteLine("Digite a quantidade de Kw/h: ");
            Console.SetCursorPosition("Digite a quantidade de Kw/h: ".Length, 0);
            kwh = int.Parse(Console.ReadLine());
            consumo = kwh * 0.86;
            icms = consumo * 0.18;
            cofins = consumo * 0.2;
            pispaseb = consumo * 0.03;
            valor = consumo + icms + cofins + pispaseb + CIP;

            // saida
            Console.WriteLine($"Total Kw/h: {kwh}");
            Console.WriteLine($"Consumo: {consumo:C2}");
            Console.WriteLine($"Valor do CIP: {CIP:C2}");
            Console.WriteLine($"Valor do PIS/PASEB: {pispaseb:C2}");
            Console.WriteLine($"Valor do CONFINS: {cofins:C2}");
            Console.WriteLine($"Valor a ser pago: {valor:c2}");

        }
    }
}
