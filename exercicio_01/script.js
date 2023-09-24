
function carregar(){

    var msm = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    msm.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#3DEB94'
    }else{
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }


}

