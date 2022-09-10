//Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o 
//maior de todos eles (considere que todos os números informados serão diferentes)

var num1 = parseInt(prompt("Digite o primeiro valor: "));
var num2 = parseInt(prompt("Digite o segundo valor: "));
var num3 = parseInt(prompt("Digite o terceiro valor: "));
var num4 = parseInt(prompt("Digite o quarto valor: "));

if (num1 > num2 && num1 > num3 && num1 > num4) {
    document.write("Primeiro valor: " + num1 + "<br>")
    document.write("Ultimo valor: " + num4 + "<br>") 
    document.write( "Maior valor: " + num1);
}

if (num2 > num1 && num2 > num3 && num2 > num4) {
    document.write("Primeiro valor: " + num1 + "<br>")
    document.write("Ultimo valor: " + num4 + "<br>") 
    document.write( "Maior valor: " + num2);
}

if (num3 > num1 && num3 > num2 && num3 > num4) {
    document.write("Primeiro valor: " + num1 + "<br>")
    document.write("Ultimo valor: " + num4 + "<br>") 
    document.write( "Maior valor: " + num3);
}

if (num4 > num1 && num4 > num2 && num4 > num3) {
    document.write("Primeiro valor: " + num1 + "<br>")
    document.write("Ultimo valor: " + num4 + "<br>") 
    document.write( "Maior valor: " + num4);
}
