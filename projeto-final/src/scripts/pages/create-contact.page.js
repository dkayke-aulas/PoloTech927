import { Header } from "../components/header.component.js"

const root = document.getElementById('root')
const createContacts = document.createElement('form')
createContacts.setAttribute("id", "p-create-contact")

const events = () => {
    createContacts.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(createContacts)
        const data = Object.fromEntries(fd)
        
        // tratando telefones (array de objetos, apenas 3)
        data.telefones = [
            { tipo: data['tipo-telefone-1'], numero: data['numero-1']},
            { tipo: data['tipo-telefone-2'], numero: data['numero-2']},
            { tipo: data['tipo-telefone-3'], numero: data['numero-3']},
        ]

        delete data['tipo-telefone-1']
        delete data['tipo-telefone-2']
        delete data['tipo-telefone-3']
        delete data['numero-1']
        delete data['numero-2']
        delete data['numero-3']

        // tratando endereço (objeto)
        data.endereco = {
            logradouro: data['logradouro'],
            cidade: data['cidade'],
            estado: data['estado'],
            cep: data['cep'],
            pais: data['pais'],
        }

        delete data['logradouro']
        delete data['cidade']
        delete data['estado']
        delete data['cep']
        delete data['pais']

        console.log(data)

    })
}

export const CreateContact = () => {
    const header = Header()
    root.append(header)

    createContacts.innerHTML = `
        <h1>Novo contato</h1>
        <a href="#contacts">Ver contatos</a>

        <fieldset>
            <legend>Dados pessoais</legend>
            <input placeholder="Nome" name="nome" type="text" required/>
            <input placeholder="Apelido" name="apelido" type="text" />
            <input placeholder="E-mail" name="email" type="email" />
            <textarea placeholder="Nota" name="notas" /></textarea>
        </fieldset>

        <fieldset>
            <legend>Endereço</legend>
            <input placeholder="Logradouro" name="logradouro" type="text" />
            <input placeholder="Cidade" name="cidade" type="text" />
            <input placeholder="Estado" name="estado" type="text" />
            <input placeholder="CEP" name="cep" type="text" />
            <input placeholder="País" name="pais" type="text" />
        </fieldset>
            
        <fieldset>
            <legend>Telefones</legend>
            <select name="tipo-telefone-1">
                <option value="casa">Casa</option>
                <option value="trabalho">Trabalho</option>
                <option value="celular">Celular</option>
            </select>
            <input name="numero-1" type="phone" />

            <select name="tipo-telefone-2">
                <option value="casa">Casa</option>
                <option value="trabalho">Trabalho</option>
                <option value="celular">Celular</option>
            </select>
            <input name="numero-2" type="phone" />

            <select name="tipo-telefone-3">
                <option value="casa">Casa</option>
                <option value="trabalho">Trabalho</option>
                <option value="celular">Celular</option>
            </select>
            <input name="numero-3" type="phone" />
        </fieldset>

        <button>Cadastrar</button>
    `

    events()
    return createContacts
}
