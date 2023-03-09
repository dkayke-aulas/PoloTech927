import { criarUsuario } from "../services/user.service"

const signup = document.createElement('form')
signup.setAttribute("id", "p-signup")

const events = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(signup)
        const data = Object.fromEntries(fd)

        criarUsuario(data)
            .then((response) => {
                const retorno = signup.querySelector("#retorno")

                if(response.status === 409) {
                    retorno.innerText = response.mensagem
                }
                
                if(response.status === 200) {
                    window.location.href = "/#login"
                }
            })
            .catch((error) => {
                console.error(error)
            })
    })
}

export const Signup = () => {

    signup.innerHTML = `
        <h3>Novo cadastro</h3>
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" />

        <label for="email">E-mail</label>
        <input id="email" name="email" type="text" />

        <label for="senha">Senha</label>
        <input id="senha" name="senha" type="password" />

        <button id="btn-criar">Criar</button>
        <p>Já tem conta? <a href="/#login">Acesse agora!</a></p>
        
        <br>

        <label id="retorno"></label>
    `

    events()
    return signup
}
