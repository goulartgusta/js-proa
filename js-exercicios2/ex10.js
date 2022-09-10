//Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) 
//de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:


var m;
var f;

var altura = parseFloat(prompt("Digite a sua altura:"));
var sexo = parseInt(prompt("Digite 1 para masculino e 2 para feminino:"));

if (sexo == 1) {
  m = (72.7 * altura - 58);
  document.write("O seu peso ideial é:" + m);
}

else if (sexo == 2) {
  f = (62.1 * altura - 44.7);
  document.write("O seu peso ideial é:" + f);
}
else {
  document.write("ERRO!! Tente novamente.")
}