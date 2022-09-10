//Faça um programa que leia  3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

var num1 = parseInt(prompt("Qual o primeiro número?"));
var num2 = parseInt(prompt("Qual o segundo número?"));
var num3 = parseInt(prompt("Qual o terceiro número?"));
var soma;

if (num3 < num1 && num1 < num2) {
    soma = num1 + num2;
    document.write("A soma será: " + soma);
}

else if (num2 < num1 && num1 < num3) {
    soma = num1 + num3;
    document.write("A soma será: " + soma);
}

else if (num1 > num3) {
    soma = num1 + num2;
    document.write("A soma será: " + soma);
}
else {
    soma = num2 + num3;
    document.write("A soma será: " + soma);
}