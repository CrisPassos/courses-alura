using System;

namespace Condicionais2
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Executando Projeto 8 - Condicionais 2");

            int idadeJoao = 16;
            int quantidadePessoas = 2;
            bool acompanhado = quantidadePessoas >= 2;

            if (idadeJoao >= 18 || acompanhado)
            {
                Console.WriteLine("João pode entrar na festinha");
            }
            else
            {
                Console.WriteLine("João não pode entrar na festinha");
            }

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
