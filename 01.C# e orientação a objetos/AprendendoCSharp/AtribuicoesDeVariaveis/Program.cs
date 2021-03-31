using System;

namespace AtribuicoesDeVariaveis
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 6 - Atribuições de Varíaveis");

            int idade = 27;
            int idadeCris = idade;

            idade = 30;

            Console.WriteLine(idade);
            Console.WriteLine(idadeCris);

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
