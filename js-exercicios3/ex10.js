//10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

var num = parseInt(prompt("Digite um número para fazer a tabuada: "));
document.write("Tabuada do " + num + ": " + "<br>");

for (i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + i * num + "<br>");
}