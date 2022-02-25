let NAME = prompt("Olá? meu nome é CASE e vou auxilia-lo em sua viagem estelar  como devo chama-lo?")

alert(`Muito bem ${NAME}! agora vamos configurar a velocidade de nossa viagem estelar.`)

let SPEED = prompt("Informe a velocidade que gostaria de viajar? entre 0 - 500 km/h   atualmente estamos em 0km/h")

let trueOrfalse = confirm(`você gostaria de aumentar para velocidade ${SPEED}km/h?`)

while(trueOrfalse == false){

    SPEED = prompt("Informe a velocidade que gostaria de viajar? entre 0 - 500 km/h   atualmente estamos em 0km/h")

    trueOrfalse = confirm(`você gostaria de aumentar para velocidade ${SPEED}km/h?`) 
}

if(SPEED <= 100){
    
    confirm(`Você está muito devagar! uma tartaruga poderia nos ultrapassar facilmente`)

}else if(SPEED <= 200){
   
    alert(`Você está a uma velocidade razoável `)

}else if(SPEED <= 300){
   
    alert(`Você está em velocidade de cruzeiro. mantenha nesta velocidade para evitar danos no casco e ao motor! `)

}else if(SPEED <= 400){ 
    
    alert(`Você está em uma velocidade perigosa os detritos do espaço pode romper o casco, o motor pode fundir ou os dois juntos`)

}else if(SPEED <= 500){ 
   
    let alien = confirm(`Você está fugindo de alienígenas? se não eu vou diminuir automaticamente para velocidade de cruzeiro!                   sim/não`)
    if(alien == false){
        SPEED = 300
        alert(`Você está em velocidade de cruzeiro. mantenha nesta velocidade para evitar danos no casco e ao motor! `)
    }else{
        alert("MEU DEUS DO CÉU BERG CORRE!")
    }
}