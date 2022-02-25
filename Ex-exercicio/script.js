function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img. src="imgs/manha.jpg"
    }else if(hora >= 12 && hora < 18){
        img.src="imgs/tarde.jpg"
        document.body.style.background = '#b9846f'
    }else{
        img.src="imgs/noite.jpg"
        document.body.style.background = '#12365D'
    }
}

