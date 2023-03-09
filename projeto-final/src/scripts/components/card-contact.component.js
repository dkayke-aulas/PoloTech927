export const CardContact = (contato) => {
    const cardContact = document.createElement('div')
    cardContact.setAttribute("id", "c-card-contact")
    
    const events = (contato) => {
        const anchor = cardContact.querySelector('a')
        anchor.addEventListener('click', (e) => {
            e.preventDefault()
            window.history.replaceState(contato, "", "/#contact-datails")
            window.location.reload()
        })
    }

    cardContact.innerHTML = `
        <h3>${contato.nome}</h3>
        <p>Possui <b>${contato.telefones.length}</b> telefones cadastrado</p>
        <a href="/#contacts">Ver mais</a>
    `
    
    events(contato)
    return cardContact
}
