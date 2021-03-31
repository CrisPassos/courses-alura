using System;

namespace ConversoesEOutrosTiposNumericos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 4 - Conversões e Outros Tipos Númericos");

            double salario;
            salario = 1200.50;

            // o int é um tipo de variavel de 32 bits
            int salarioEmInteiro;
            salarioEmInteiro = (int)salario;

            Console.WriteLine(salarioEmInteiro);

            uint idade = 1300000000;

            Console.WriteLine(idade);

            // O long é um tipo de variavel de 64 bits
            long idadeLong = 1300000000000000;
            Console.WriteLine(idadeLong);

            // o int é um tipo de variavel de 16 bits
            short quantidadeProdutos = 15000;

            Console.WriteLine(quantidadeProdutos);

            float altura = 1.80f;

            Console.WriteLine(altura);

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();

        }
    }
}
