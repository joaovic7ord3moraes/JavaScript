let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da Nave")

chosenOption = prompt("Deseja entrar em dobra espacial? \n1- Sim \n2- Não")

while(chosenOption == "1"){
    warpCount  += 1
    chosenOption = prompt("Deseja entrar em dobra espacial? \n1- Sim \n2- Não")
}

alert(`A nave ${spaceship} Quantidade de dobras: ${warpCount}`)