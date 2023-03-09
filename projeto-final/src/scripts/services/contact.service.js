import appSettings from "../../../appSettings";

const url = `${appSettings.baseUrl}/contact`

const headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Authorization", sessionStorage.getItem("@token"))

/*
@function criarContato
*/
export const criarContato = async (data) => {
    const options = {
        headers,
        body: JSON.stringify(data),
        method: "POST",
    }

    const response = await fetch(url, options)
    return await response.json()
}

/*
    @function buscarContatos
*/
export const buscarContatos = async () => {
    const options = {
        headers,
        method: "GET",
    }

    const response = await fetch(url, options)
    return await response.json()
}

/*
    @function excluirContato
*/
export const excluirContato = async (idContato) => {
    const options = {
        headers,
        body: JSON.stringify({ idContato }),
        method: "DELETE",
    }

    const response = await fetch(url, options)
    return await response.json()
}