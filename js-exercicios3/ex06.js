//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. 
//Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" 
//e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo 
//a quantidade de alunos aprovados.

var aprovado = 0;
var reprovado = 0;
var repetir = "S";

while (repetir == "S") {
    var nota1 = parseInt(window.prompt("Digite a primeira nota do aluno: "));
    var nota2 = parseInt(window.prompt("Digite a segunda nota do aluno: "));
    var media = (nota1 + nota2) / 2;
    window.alert("A média do aluno é " + media);

    if (media > 9.5) {
        aprovado++;
    } else {
        reprovado++;
    }

    repetir = window.prompt("Você deseja calcular a nota de outro aluno? Digite S ou N.");
}

document.write("Número de alunos aprovados: " + aprovado + "<br>" + "Número de alunos reprovados: " + reprovado);