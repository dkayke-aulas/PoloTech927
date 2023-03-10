import contacts from './../../asset/contact.png'

export const Header = () => {
    const header = document.createElement('header')
    header.setAttribute("id", "c-header")

    const usuario = JSON.parse(sessionStorage.getItem("@user"))

    const events = () => {
        const btnSair = header.querySelector('#btn-sair')
        btnSair.addEventListener('click', () => {
            sessionStorage.clear()
            history.replaceState(null, "", "/#login")// modifica a rota sem reload
            window.location.reload() // força o reload da página com a nova hash
        })
    }

    header.innerHTML = `
        <div>    
            <a href="/#contacts"><img src="${contacts}" alt="logotipo"></a>
            <span>${usuario.nome}</span>
        </div>
        <button id="btn-sair" type="button">Sair</button>
    `

    events()
    return header
}
