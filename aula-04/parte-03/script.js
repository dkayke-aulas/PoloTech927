window.addEventListener('load', () => {
    const resposta = document.getElementById("contador")
    const btnDecrementar = document.querySelector("#btn-decrementar")
    const btnZerar = document.getElementById("btn-zerar")
    const btnIncrementar = document.querySelector("#btn-incrementar")
    
    let contador = 0
    pintar()

    function pintar() {
        if(contador === 0) {
            resposta.style.color = 'blue'
        }
        else if(contador % 2 === 0) {
            resposta.style.color = 'tomato'
        }
        else {
            resposta.style.color = 'darkgreen'
        }
    }

    function incrementar() {
        if (contador < 10) resposta.innerText = ++contador
        pintar()
    }
    
    function decrementar() {
        if (contador > -10) resposta.innerText = --contador
        pintar()
    }

    function zerar() {
        contador = 0
        resposta.innerText = contador
        pintar()
    }
    
    btnIncrementar.addEventListener('click', incrementar)
    btnDecrementar.addEventListener('click', decrementar)
    btnZerar.addEventListener('click', zerar)
})
