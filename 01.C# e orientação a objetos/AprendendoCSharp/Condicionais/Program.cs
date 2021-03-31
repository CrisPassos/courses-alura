using System;

namespace Condicionais
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 7 - Condicionais");

            int idadeJoao = 16;
            int quantidadePessoas = 2;

            if(idadeJoao >= 18)
            {
                Console.WriteLine("João é maior de idade, pode entrar na festinha");
            }
            else if(quantidadePessoas >=2)
            {
                Console.WriteLine("João não é maior de idade, mas está acompanhado pode entrar");
            }
            else 
            {
                Console.WriteLine("João não é maior de idade, não pode entrar na festinha");
            }

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
