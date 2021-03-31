using System;

namespace CalculaPoupanca
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 10 - Calcula Poupança");

            double valorInvestido = 1000.0;
            int meses = 1;

            while (meses <= 12)
            {
                valorInvestido = valorInvestido + valorInvestido * 0.0036;
                Console.WriteLine("Após o " + meses + "o mês, você terá R$ " + valorInvestido);

                meses++;
            }


            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
