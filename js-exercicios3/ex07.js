//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser 
//aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

var lista = []
var soma = 0

for (i = 1; i <= 6; i++) {
    var nota = parseInt(prompt("Digite a nota do " + i + "°" + " aluno(a): "))
    if (nota >= 0 && nota <= 10) {
        lista.push(nota);
    }
    else {
        alert("ERRO! Número da nota inválida! Digite a o número da nota de 0 a 10.");
    }
}

for (i = 0; i < lista.length; i++) {
    soma += lista[i];
}

var media = soma / 6;

if (media > 5) {
    document.write("A média do aluno(a) é " + media + "<br>" + "Ele(a) passou!!");
} else {
    document.write("A média do aluno(a) é " + media + "<br>" + "Ele(a) não passou...");
}