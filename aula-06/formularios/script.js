const form = document.querySelector('form[name="login"]')

function submeterFormLogin () {
    const fd = new FormData(form)
    console.log(fd)
    const dadosFormulario = Object.fromEntries(fd)

    // const entradas = fd.entries()

    // const campos = Array.from(entradas) // [['chave', 'valor'], ['chave', 'valor']]

    // const dadosFormulario = {} // { usuario: '', senha: '', salva: false}

    // const mapear = (item, index, array) => {
    //     return dadosFormulario[item[0]] = item[1]
    // }
    
    // campos.forEach(mapear)
    
    console.log(dadosFormulario)
}






// form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     // const usuario = document.getElementById('usuario')
//     // console.log(usuario.value)
//     // usuario.value="NOVO VALOR"

//     const forms = document.forms
//     console.log(forms.login.usuario.value)
//     console.log(forms.login.senha.value)

//     console.log('SUBMETEU')
// })

// index.html?usuario=user&senha=12345&salvar=on
// index.html?usuario=dannyel&senha=54321&salvar=on