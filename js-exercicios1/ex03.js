//Escreva um programa em Javascript em que o usuário informe o 
//seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem 
//"Olá, [NomeDoUsuario], sua idade é [idade]".

var nomeDoUsuario = prompt("Digite seu nome: ");
var idade = parseInt(prompt("Digite sua idade: "));

document.write("Olá, " + nomeDoUsuario + ", sua idade é " + idade);