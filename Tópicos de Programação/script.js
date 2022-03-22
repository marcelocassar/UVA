function rodar(){

var media, segundo, total, t
t = 1
var total = Number(prompt("O primeiro integrante da sua familía possui quantos anos?"))
var op = confirm("Possui mais algum outro?")

while (op == true) {

    var segundo = Number(prompt("Se sim, coloque a idade: "))
    var total = total + segundo
    t++
    var op = confirm("Possui mais algum outro?")
}

media = total / t

document.write(`A média de idade da familia é de ${media}.<br>`)
}

