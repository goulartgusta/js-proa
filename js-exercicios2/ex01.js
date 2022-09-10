//Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

var num1 = prompt("Digite o primeiro numero");
var num2 = prompt("Digite o primeiro numero");

if(num1 > num2){
    document.write("O primeiro numero é maior: " + num1);
}

else if(num1 < num2){
    document.write("O segundo numero é maior: " + num2);
}
else{
    num1 = num2
    document.write("Os dois numeros sao iguais, tente de novo");
}