import { Header } from "../components/header.component.js"

const root = document.getElementById('root')
const teste = document.createElement('form')
teste.setAttribute("id", "p-teste")

export const Teste = () => {
    const header = Header()
    root.append(header)

    teste.innerHTML = `
        <h1>Página de teste</h1>
    `

    return teste
}
