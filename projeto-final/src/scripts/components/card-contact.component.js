import { excluirContato } from "../services/contact.service"
import trash from './../../asset/trash.png'
import eye from './../../asset/eye.png'

export const CardContact = (contato) => {
    const cardContact = document.createElement('div')
    cardContact.setAttribute("id", "c-card-contact")
    
    const events = (contato) => {
        const [anchorDelete, anchorDetail] = cardContact.querySelectorAll('a')

        anchorDelete.addEventListener('click', (e) => {
            e.preventDefault()
            const confirm = window.confirm(`Deseja deletar o contato ${contato.nome}?`)
            
            if(confirm) {
                excluirContato(contato.id).then(() => {
                    window.location.reload()
                })
            }
        })

        anchorDetail.addEventListener('click', (e) => {
            e.preventDefault()
            window.history.replaceState(contato, "", "/#contact-datails")
            window.location.reload()
        })
    }

    const text = contato.telefones.length > 1 ? "telefones cadastrados" : "telefone cadastrado"

    cardContact.innerHTML = `
        <h3>${contato.nome}</h3>
        <p>Possui <b>${contato.telefones.length}</b> ${text}</p>
        <a href="/#contacts"><img src="${trash}" alt="Excluir"></a>
        <a href="/#contacts"><img src="${eye}" alt="Detalhar"></a>
    `
    
    events(contato)
    return cardContact
}
