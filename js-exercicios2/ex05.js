//Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números 
//informados e escreva a média aritmética desses valores lidos.

var num1 = parseInt(prompt("Digite o primeiro valor: "));
var num2 = parseInt(prompt("Digite o segundo valor: "));
var num3 = parseInt(prompt("Digite o terceiro valor: "));
var num4 = parseInt(prompt("Digite o quarto valor: "));
var num5 = parseInt(prompt("Digite o quinto valor: "));
var num6 = parseInt(prompt("Digite o sexto valor: "));

var calcular = num1 + num2 + num3 + num4 + num5 + num6;
var media = calcular / 6;

document.write(num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5 + " " + num6 + " Soma: " + calcular + " Média:  " + media);