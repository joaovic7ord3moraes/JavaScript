let P1 = prompt("Qual a sua idade?")
let NOME1 = prompt("Qual o seu nome?")

let P2 = prompt("Qual a sua idade?")       
let NOME2 = prompt("Qual o seu nome?")

P1 = Number(P1)
P2 = Number(P2)

let dif = P1 - P2

if(dif < 0){
    let dif = P2 - P1

    alert(`A diferença de idade de ${NOME1} e ${NOME2} é de ${dif} anos /n 
    A pessoa mais velha é ${NOME2} com ${P2} anos de idade! /n
    A pessoa mais nova é ${NOME1} com ${P1} anos de idade!`)
}else{
    alert(`A diferença de idade de ${NOME1} e ${NOME2} é de ${dif} anos /n
    A pessoa mais nova é ${NOME2} com ${P2} anos de idade!/n
    A pessoa mais velha é ${NOME1} com ${P1} anos de idade! `)
}