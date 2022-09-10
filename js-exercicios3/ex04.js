//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).


var media = 0;
var soma = 0;

for (var i = 15; i <= 100; i++) {
    soma += i;
}


document.write("A média aritmética entre 15 e 100 é " + soma / 85);