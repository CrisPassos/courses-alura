using System;

namespace Escopo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 9 - Escopos");

            int idadeJoao = 16;
            int quantidadePessoas = 2;
            bool acompanhado = quantidadePessoas >= 2;
            string mensagemAdicional;

            if (acompanhado)
            {
                mensagemAdicional = "João está acompanhado";
            }
            else
            {
                mensagemAdicional = "João está sozinho";
            }

            if (idadeJoao >= 18 || acompanhado)
            {
                Console.WriteLine("João pode entrar na festinha");
                Console.WriteLine(mensagemAdicional);

            }
            else
            {
                Console.WriteLine("João não pode entrar na festinha");
                Console.WriteLine(mensagemAdicional);
            }

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
