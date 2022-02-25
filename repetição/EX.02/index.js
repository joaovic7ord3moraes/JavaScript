let spaceship = "Helmet"
let newSpaceship = " "

for(let i = 0; i= spaceship.length; i++){
    if(spaceship [i] == "e" || "t"){
        newSpaceship += "o"
    }else{
        newSpaceship += spaceship[i]
    }
}
prompt(`${newSpaceship}`)