const paragrafo = document.getElementsByTagName('p')
const div = document.querySelector('div')
const button = document.querySelector('button')

const elementoH1 = document.createElement('h1')
const node = document.createTextNode('Este é um node')

elementoH1.appendChild(node)

div.insertBefore(elementoH1, button)

div.appendChild(elementoH1.cloneNode(true))



function ola() {
    div.removeChild(elementoH1)
}