// const numeros = [1, 2, 3, 4]
// // tem 4 itens
// // indice vai até 3

// // spread
// const nums = [ ...numeros ]

// numeros[0] = 5
// nums[0] = 6


// console.log(numeros);
// console.log(nums);



const pessoa = ["Dannyel", 26, true, { matematica: true }]

// const nome = pessoa[0]
// const idade = pessoa[1]
// const ehMaiorIdade = pessoa[2]
// const materias = pessoa[3]

const [nome, idade, ...resto] = pessoa


// const frutas = ['maçã', 'banana', 'pitanga', 'uva', 'laranja']
let frutas = []
const outros = ['leite condenado', 'gelatina']

// console.log(frutas.length) // quantidade de itens no array
// console.log( frutas.includes('maçã', 2) ) // retorna boolean
// console.log( frutas.indexOf('pitangas') ) // retorna boolean
// console.log( frutas.concat(outros, []) ) // une dois ou mais arrays
// console.log( frutas.toString() ) // transforma em string separado por virgula
// console.log( frutas.join(', ') ) // transforma em string separado pelo operado passado como parametro
// console.log( [...frutas].sort() ) // [MODIFICA] ordena os itens por ordem alfabetica
// console.log( frutas.splice(2, 3) ) // a partir da posição x, retorne y elementos contando com a posição x
// console.log( frutas.slice(2) ) // a partir da posição x, retorne y elementos incluindo x e excluido y

// primeiro a entrar -> primeiro a sair (FIFO) fila
// ultimo a entrar -> primeiro a sair (LIFO) pilha


frutas.unshift('maçã') // empilha (coloca na topo)
frutas.unshift('banana')
const unshift =  frutas.unshift('pitanga') // retorna a quantidade de itens no array
frutas.unshift('uva')
frutas.unshift('laranja')
const shift = frutas.shift() // desempilha (remove da topo), retorn o item removido
console.log( shift )

frutas = []
frutas.push('maçã') // enfileira (coloca no topo)
frutas.push('banana')
const push =  frutas.push('pitanga') // retorna a quantidade de itens no array
frutas.push('uva')
frutas.push('laranja') //
const pop = frutas.pop() // desinfileira (remove da base)

console.log(pop);