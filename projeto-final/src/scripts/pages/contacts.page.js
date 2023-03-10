import { CardContact } from "../components/card-contact.component.js"
import { Header } from "../components/header.component.js"
import { buscarContatos } from "../services/contact.service.js"

const root = document.getElementById('root')
const contacts = document.createElement('div')
contacts.setAttribute("id", "p-contacts")

const events = () => {
    buscarContatos()
        .then((contatos) => {
            const cards = contacts.querySelector('#cards')

            contatos.data.forEach((item) => {
                const cardContact = CardContact(item)
                cards.append(cardContact)
            })
        })
}

export const Contacts = () => {
    const header = Header()
    root.append(header)

    contacts.innerHTML = `
        <h1>Contatos</h1>
        <a href="#create-contact">Adicionar novo contato</a>
        <div id="cards"></div>
    `

    events()
    return contacts
}
