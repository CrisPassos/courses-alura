using System;

namespace CalculaInvestimentoLongoPrazo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 12 - Calcula Investimento Longo Prazo");

            double valorInvestido = 1000.0;
            double fatorRendimento = 1.0036;

            for (int i = 1; i <= 5; i++)
            { 
                for (int j = 1; j <= 12; j++)
                {
                    valorInvestido *= fatorRendimento;

                }
                fatorRendimento += 0.0010;

            }


            Console.WriteLine("Ao término do investimento você tera: " + valorInvestido);

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
