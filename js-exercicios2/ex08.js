//Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números 
//forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem 
//"Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

var num1 = parseInt(prompt("Digite o primeiro valor: "));
var num2 = parseInt(prompt("Digite o segundo valor: "));
var num3 = parseInt(prompt("Digite o terceiro valor: "));
var num4 = parseInt(prompt("Digite o quarto valor: "));
var soma = 0;

var media = (num1 + num2 + num3 + num4) / 4;

if (media < 5) {
    soma += num1;
    alert("Você foi reprovado");
}
if (media > 5) {
    soma += num2;
    alert("Você foi aprovado");
}

document.write("A sua média é " + media);

// Mesmo exercício, executado com o filtro de aceitar valores entre 0 e 10, feito em array utilizando for.

var lista = [];
var soma = 0;

for (i = 0; i < 4; i++) {
    var num = parseInt(prompt("Digite um valor: "));

    if (num >= 0 && num <= 10) {
        lista.push(num);
    }
    else {
        alert("ERRO! Número inválido");
    }
}

for (i = 0; i < lista.length; i++) {
    soma += lista[i];
}

var media = soma / 4;

if (media > 5) {
    document.write("A sua média é " + media + "<br>" + "Você passou!!");
} else {
    document.write("A sua média é " + media + "<br>" + "Você não passou...");
}