
 /*variaveis */ 

const pedra = document.querySelector(".pedra")
const papel = document.querySelector(".papel")
const tesoura = document.querySelector(".tesoura")

/*funções*/

function rock(pedra) {
    
    let choices = ["pedra", "papel", "tesoura"]
    let tamanho = choices.length
    let aleatorio = Math.floor(Math.random() * tamanho)
    let retorno = choices[aleatorio]
    console.log(retorno)

    if (retorno == choices[0]) {
        alert("Pedra e pedra. Empate")
    }
else if (retorno == choices[1]) {
    alert("Papel cobre pedra. Você perdeu!")
}
else if (retorno == choices[2]){
    alert("Pedra amassa tesoura. Você ganhou!")
}    
}

function paper(papel) {

    let choices = ['pedra', 'papel', 'tesoura']
    let tamanho = choices.length
    let aleatorio = Math.floor(Math.random() * tamanho)
    let retorno = choices[aleatorio]
console.log(retorno)

if (retorno == choices[0]) {
    alert("Papel envolve pedra. Você venceu!")
}
else if (retorno == choices[1]) {
    alert("Papel com Papel. Empate!")
}
else if (retorno == choices[2]) {
    alert("Tesoura corta papel. Você perdeu!")
}
}

function scissors(tesoura) {
    let choices = ['pedra', 'papel', 'tesoura']
    let tamanho = choices.length
    let aleatorio = Math.floor(Math.random() * tamanho)
    let retorno = choices[aleatorio]
    console.log(retorno)

    if (retorno == choices[0]) {
        alert('Pedra amassa tesoura. Você perdeu!')
    }
    else if(retorno == choices[1]) {
        alert("Tesoura corta papel. Você ganhou!")
    }
    else if (retorno == choices[2]) {
        alert("Tesoura e Tesoura. Empate!")
    }
}