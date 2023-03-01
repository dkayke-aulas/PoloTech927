function ver() {
    const spanPontinhos = document.getElementById('pontinhos')
    const textoVerMais = document.getElementById('mais')
    const btnFechar = document.querySelector('#btn-ver')
    
    if(spanPontinhos.style.display === 'none') {
        spanPontinhos.style.display = 'inline'
        btnFechar.innerHTML = "Ver mais"
        textoVerMais.style.display = 'none'
    } 
    else {
        spanPontinhos.style.display = 'none'
        btnFechar.innerText = "Ver menos"
        textoVerMais.style.display = 'inline'
    }
}
