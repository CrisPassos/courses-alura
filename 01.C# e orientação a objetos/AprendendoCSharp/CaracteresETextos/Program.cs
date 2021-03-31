using System;

namespace CaracteresETextos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 5 - Caracteres e Textos");

            char primeiraLetra = 'C';
            Console.WriteLine(primeiraLetra);

            primeiraLetra = (char)65;
            Console.WriteLine(primeiraLetra);

            primeiraLetra = (char)(primeiraLetra + 1);
            Console.WriteLine(primeiraLetra);

            string titulo = "Alura Cursos de tecnologia";
            Console.WriteLine(titulo);

            string titulo2 = "Alura Cursos de tecnologia " + 2020;
            Console.WriteLine(titulo2);

            string cursosProgramacao = @" .NET
                Java
                JavaScript";

            Console.WriteLine(cursosProgramacao);

            Console.WriteLine("A execução acabou. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
