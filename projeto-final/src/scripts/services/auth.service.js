import appSettings from "../../../appSettings";

const url = `${appSettings.baseUrl}/auth`

const headers = new Headers()
headers.append("Content-Type", "application/json")

/*
    @function entrar
    @param {Object} data
    @param {string} data.email
    @param {string} data.senha
*/
export const entrar = async (data) => {
    const options = {
        headers,
        body: JSON.stringify(data),
        method: "POST",
    }

    const response = await fetch(url, options)
    return await response.json()
}