//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que 
//ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  
//O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

var a = parseInt(prompt("Primeiro Número: "));
var b = parseInt(prompt("Segundo Número: "));

while (b <= 0) {
    b = parseInt(prompt("Por favor, digite um número válido."));
}

var resultado = a + b;
alert("A soma dos número é " + resultado);