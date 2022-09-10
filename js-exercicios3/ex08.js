//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). 
//Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

var num = parseInt(window.prompt("Até onde você quer contar ??"));

for (var i = 1; i < num; i++) {
    document.write(i + ", ");
}