using System;

namespace CriandoVariaveis
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 2 - Criando Varíaveis");

            int idade;

            idade = 32;
            Console.WriteLine(idade);

            idade = 10;
            Console.WriteLine(idade);


            idade = 10 + 5;
            Console.WriteLine(idade);


            idade = 10 + 5 * 2;
            Console.WriteLine(idade);


            idade = (10 + 5) * 2;
            Console.WriteLine(idade);

            idade = (10 + 5) * 2;
            Console.WriteLine("Sua idade é " + idade);

            idade = (10 + 5) * 2;
            Console.WriteLine("Sua idade é" + idade + " !");

            Console.WriteLine("Execução finalizada. Tecle enter para sair");
            Console.ReadLine();
        }
    }
}
