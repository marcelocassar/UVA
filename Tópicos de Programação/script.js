function rodar(){

var media, segundo, total, t
t = 1
var total = Number(prompt("O primeiro integrante da sua familía possui quantos anos?"))
var op = confirm("Possui mais algum outro?")
document.write(`Você digitou um membro com ${total} anos.<br>` )

while (op == true) {
    
    var segundo = Number(prompt("Se sim, coloque a idade: "))
    document.write(`Você digitou um membro com ${segundo} anos.<br>` )
    var total = total + segundo
    t++
    var op = confirm("Possui mais algum outro?")
}

media = total / t

document.write(`Sua familia tem o total de ${t} membros, e a soma total de idade de ${total}.<br>`)
document.write(`A média de idade da familia é de ${media}.<br>`)
}

