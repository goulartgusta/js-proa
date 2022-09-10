//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário 
//e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var num1 = parseInt(window.prompt("Digite o primeiro número: "));
var num2 = parseInt(window.prompt("Digite o segundo número: "));

while (num1 >= num2) {
    num2 = parseInt(window.prompt("Digite um número maior: "));
}

document.write("A média é " + (num1 + num2) / 2);