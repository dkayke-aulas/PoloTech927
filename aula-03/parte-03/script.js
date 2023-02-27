function ver() {
    const pontos = document.getElementById('pontinhos')
    const textoVerMais = document.getElementById('mais')
    const btnFechar = document.querySelector('#btn-ver')
    
    if(pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        btnFechar.innerHTML = "Ver mais"
        textoVerMais.style.display = 'none'
    } 
    else {
        pontos.style.display = 'none'
        btnFechar.innerHTML = "Ver menos"
        textoVerMais.style.display = 'inline'
    }
}