//Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

var num1 = prompt("Digite o primeiro valor: ");
var num2 = prompt("Digite o segundo valor: ");

if (num1 > 0) {
    document.write("O primeiro valor: " + num1 + " é positivo <br>");
}

else if (num1 < 0) {
    document.write("O primeiro valor: " + num1 + " é negativo <br>");
} else {
    num1 = 0
    document.write("O primeiro valor é zero <br>")
}

if (num2 > 0) {
    document.write("O segundo valor: " + num2 + " é positivo <br>");
}

else if (num2 < 0) {
    document.write("O segundo valor: " + num2 + " é negativo <br>");
} else {
    num2 = 0
    document.write("O segundo valor é zero <br>")
}