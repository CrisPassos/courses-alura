using System;

namespace CalculaPoupanca2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 11 - Calcula Poupança 2");

            double valorInvestido = 1000.0;

            for (int i = 1; i <= 12; i++)
            {
                valorInvestido *= 0.0036;
                Console.WriteLine("Após o " + i + "o mês, você terá R$ " + valorInvestido);

            }

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
