//Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.


var num1 = prompt("Digite o primeiro valor: ");
var num2 = prompt("Digite o segundo valor: ");
var num3 = prompt("Digite o terceiro valor: ");

if (num1 > num2 && num1 > num3) {
    document.write("O primeiro valor de " + num1 + " é maior ");
}
if (num2 > num1 && num2 > num3) {
    document.write("O segundo valor de " + num2 + " é maior ");
}
if (num3 > num1 && num3 > num2) {
    document.write("O terceiro valor de " + num3 + " é maior ");
}