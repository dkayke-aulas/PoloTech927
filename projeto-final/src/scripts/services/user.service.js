import appSettings from "../../../appSettings";

const url = `${appSettings.baseUrl}/user`

const headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Qualquer-Coisa", "Banana")

/*
    @function criarUsuario
    @param {Object} data
    @param {string} data.nome
    @param {string} data.email
    @param {string} data.senha
    @param {string} data.foto
*/
export const criarUsuario = async (data) => {
    const options = {
        headers,
        body: JSON.stringify(data),
        method: "POST",
    }

    const response = await fetch(url, options)
    return await response.json()
}