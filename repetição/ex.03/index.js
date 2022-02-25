function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 let spaceships = prompt("Escolha o nome da sua espaçonave?")
 let x = prompt(`O acesso a sua ${spaceships} será protegido por uma senha aleatória, o tamanho dessa senha será de sua escolha. (Porém o mesmo deve ser maior que 6 caracteres)`)
 let tamanho = Number(x)
if(tamanho < 6){
    alert("Sua senha é curta de mais! vamos adicionar + 6 caracteres")
    tamanho = tamanho + 6
}


let charTorepalce = prompt("Qual caracter você deseja substituir?")

let  replaceChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship = ""


for(let pos = 0; pos < spaceships.length; pos++){
    if(spaceships[pos] == charTorepalce){
        newSpaceship += replaceChar
    }else{
        newSpaceship += spaceships[pos]
    }
}
alert(`O novo nome da nave é ${newSpaceship} e sua senha é: ` + makeid(tamanho))


