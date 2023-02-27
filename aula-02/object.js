// chave: valor


const pessoa = {
    nome: "Dannyel",
    nome: "Andrade",
    idade: 26,
    materias: ['matematica', 'fisica']
}

// const nova_variavel = 'animal'
// pessoa[nova_variavel] = "é um animal"

const pessoa_dois = {...pessoa}
pessoa_dois.idade = 10

const { materias, ...resto } = pessoa
console.log(window)

// console.log(pessoa['endereco']['bairro'])
// console.log(pessoa.materias)

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)

// for(let index = 0; index < chaves.length; index++) {
//     const chave = chaves[index]
//     // pessoa['nome']
//     console.log("a chave é", chave, "o valor é", pessoa[chave] )
// }

const entradas = Object.entries(pessoa)

// const arr = [
//     ['nome', 'Dannyel'],
//     ['idade', 26],
//     ['materias', ['matematica', 'fisica']],
// ]

// const [_, segundo, ...resto] = arr

// for(let index = 0; index < entradas.length; index++) {
//     const [banana, mamao] = entradas[index]
//     console.log('chave >', banana, 'valor >', mamao)
// }


// Objetos em JS são idênticos ao JSON

// {
//     "nome-da-pessoa": "Dannyel",
//     "idade": true,
// }