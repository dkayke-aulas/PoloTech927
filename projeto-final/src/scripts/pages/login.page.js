import { entrar } from "../services/auth.service.js"

const login = document.createElement('form')
login.setAttribute("id", "p-login")

const events = () => {
    login.addEventListener('submit', async (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const data = Object.fromEntries(fd)

        entrar(data)
            .then((response) => {
                sessionStorage.setItem('@user', JSON.stringify(response.data))
                sessionStorage.setItem("@token", response.data.token)

                history.replaceState(null, "", "/#contacts")// modifica a rota sem reload
                window.location.reload() // força o reload da página com a nova hash
            })
    })
}

export const Login = () => {
    login.innerHTML = `
        <label for="email">Usuário</label>
        <input id="email" name="email" type="email" />

        <label for="senha">Senha</label>
        <input id="senha" name="senha" type="password" />

        <fildset>
            <label for="salvar">Salvar</label>
            <input name="salvar" id="salvar" type="radio" value="true" />
            <label for="nao-salvar">Não salvar</label>
            <input name="salvar" id="nao-salvar" type="radio" value="false" />
        </fildset>

        <button id="btn-entrar">Entrar</button>
        <p>Não tem conta? <a href="/#signup">Crie agora!</a></p>
    `

    events()
    return login
}
