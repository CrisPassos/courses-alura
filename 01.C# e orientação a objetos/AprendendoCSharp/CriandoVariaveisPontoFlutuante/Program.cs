using System;

namespace CriandoVariaveisPontoFlutuante
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 3 - Criando Variaiveis Ponto Flutuantes");

            double salario;

            salario = 1200.70;
            Console.WriteLine(salario);

            double idadeInt;
            idadeInt = 15 / 2;

            Console.WriteLine(idadeInt);

            double idade;
            idade = 15.0 / 2.0;

            Console.WriteLine(idade);
                 

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
