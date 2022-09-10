//11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre 
//os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

var entre = 0;
var fora = 0;

for (var i = 1; i <= 10; i++) {
    var num = parseInt(prompt("Digite o " + i + "°" + " valor."));

    if (num > 24 || num < 42) {
        entre++;
    } else {
        fora++;
    }

}

document.write("Os valores entre 24 e 42 foram: " + entre + "<br>" + "E os que estão de fora são: " + fora);