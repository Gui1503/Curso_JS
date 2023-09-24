function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear() //para chamar o ano atual
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')


    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//para chamar o name das duas ids tanto masculino quanto feminino
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'img/adolecente_m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/homen.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'img/adolecente_f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }


        }



        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)

    }


}