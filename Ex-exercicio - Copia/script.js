function verificar(){
    let data  = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] verifique os dados!")
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade >=0 && idade <5){
                //Bebe
                img.setAttribute('src','bebe-m.jpg')
            }else if(idade < 13){
                //Criança
                img.setAttribute('src','criança-m.jpg')
            }else if(idade< 21){
                //Jovem
                img.setAttribute('src','adole-m.jpg')
            }else if(idade< 50){
                //meia idade
                img.setAttribute('src','homem.jpg')
            }else{
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <5){
                //Bebe
                img.setAttribute('src', 'bebe-f.jpg')
            }else if(idade < 13){
                //Criança
                img.setAttribute('src', 'criança-f.jpg')
            }else if(idade< 21){
                //Jovem
                img.setAttribute('src', 'adole-f.jpg')
            }else if(idade< 50){
                //meia idade
                img.setAttribute('src', 'mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}