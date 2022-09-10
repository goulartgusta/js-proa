//Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que 
//diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

var data = parseInt(prompt("Digite seu ano de nascimento para saber se pode votar: "));

if (data < 2006){
    alert("Parabéns!! Você tem idade para votar.")
} 

else{
    alert("Que pena!! Você ainda não tem idade para votar.")
}