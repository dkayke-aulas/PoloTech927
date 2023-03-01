function dizOi(nome) {
    console.log('olá', nome)
}

function bemVindx(nome) {
    console.log('bem-vindx', nome)
}

function bemVindxAoLar(nome) {
    console.log(nome);
    console.log('bem-vindx ao lar')
}

function init2(funcaoBanana) {
    const nome = "Dannyel"

    if(funcaoBanana) {
        funcaoBanana(nome)
    }
}

init2(dizOi)
init2(bemVindx)

init2()
init2(bemVindxAoLar)

