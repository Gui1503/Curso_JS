function contar() {

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar....`
        //window.alert('[ERRO] Falta dados?????')

    } else {
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)


        if(p <=0 ){
            window.alert('Passo inválido considerando Passo 1')
            p = 1
        }

        if (i < f) {

            for (var c = i; c <= f; c += p) {
                res.innerHTML +=` ${c} \u{1F449}`

            }

        }else{
            for (var c = i ;c >= f ; c -= p){
                res.innerHTML +=` ${c} \u{1f449}`
            }
        }

        res.innerHTML += `\u{1f3c1}`



    }



}