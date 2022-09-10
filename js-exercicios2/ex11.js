//Uma micro calculadora
//Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
//executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).
//O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere
//que só serão lidos os valores 1, 2, 3 ou 4 para as operações

var num1 = parseInt(prompt("Digite o primeiro valor:"));
var num2 = parseInt(prompt("Digite o segundo valor: "));
var calculadora = parseInt(prompt("Digite o tipo de cálculo que deseja: sendo 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação"))
var resultado= 0;

if(calculadora == 1){
    resultado = num1 + num2;
}

else if(calculadora == 2){
    resultado = num1 - num2;
}

else if(calculadora == 3){
    resultado = num1 / num2;
}

else if (calculadora == 4){
    resultado = num1 * num2;
}
else{
    alert("ERRO!! Tente novamente.");
}

document.write("O resultado da operação é " + resultado);