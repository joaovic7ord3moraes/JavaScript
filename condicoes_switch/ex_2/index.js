let years = prompt("Quantos anos luz você deseja converter?")

let result

let option = prompt("Escolha a opção do valor da conversão: \n1 - Parsec(pc) = 1 ano luz = 0,306601 \n2 - Unidade astronomica(AU) = 1 ano luz = 63241,1 AU \n3 - Quilometros(km) = 1 ano luz = 9,5 * 10^12")

switch(option){
    case "1":
        result = years*0,306602
        alert(`${option} anos luz convertida em Parsec(pc) é de: ${result}(pc)`)
    break

    case "2":
        result = years*63241,1
        alert(`${option} anos luz convertida em Unidade Atronomica(AU) é de: ${result}(AU)`)
    break

    case "3":
        result = years * 9,5 * Math.pow(10,12)
        alert(`${option} anos luz convertida em Quilometros(km) é de:${result} Quilometros`)
    break

    default:
        alert("Valor inválido")
    break


}


