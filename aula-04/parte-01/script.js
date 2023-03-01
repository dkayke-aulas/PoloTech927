
function callbackFn(bananaEvento) {
    // documento carregado
    if(bananaEvento.target.readyState === 'interactive') {
        const divLoading = document.querySelector("[role='alertdialog']")
        divLoading.classList.add('loading')
        console.log('interactive - O DOCUMENTO CARREGOU!')
    }
    
    // sub-recursos carregados
    if(bananaEvento.target.readyState === 'complete') {
        console.log('complete - O DOCUMENTO E SUB-RECURSOS CARREGARAM!')
    }
}

document.addEventListener('readystatechange', callbackFn)

window.addEventListener('load', function() {
    const divLoading = document.querySelector("[role='alertdialog']")
    divLoading.classList.remove('loading')
})
