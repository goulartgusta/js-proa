//Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 
//72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou. 

var num1 = parseInt(prompt("Digite um valor: "));
var num2 = parseInt(prompt("Digite um valor: "));
var num3 = parseInt(prompt("Digite um valor: "));
var num4 = parseInt(prompt("Digite um valor: "));
var num5 = parseInt(prompt("Digite um valor: "));
var num6 = parseInt(prompt("Digite um valor: "));
var soma = 0;

if (num1 <= 72) {
    soma += num1;
}
if (num2 <= 72) {
    soma += num2;
}
if (num3 <= 72) {
    soma += num3;
}
if (num4 <= 72) {
    soma += num4;
}
if (num5 <= 72) {
    soma += num5;
}
if (num6 <= 72) {
    soma += num6;
}

document.write("O resultado da soma é " + soma + "<br>");
document.write("Os valores digitados são " + num1 + ', ' + num2 + ', ' + num3 + ', ' + num4 + ', ' + num5 + ', ' + num6);

//Mesmo exercício. Utizando listas e for:

var lista = [];
var soma = 0;

for (i = 0; i < 6; i++) {
    var num = parseInt(prompt("Digite um valor: "));
    if (num < 72) {
        lista.push(num);
    }
}

for (i = 0; i < lista.length; i++) {
    soma += lista[i];
}

document.write("O valor da soma é " + soma + "<br>" + " todos o valores informados são " + lista);