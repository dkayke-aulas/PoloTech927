const frutas = ['maçã', 'banana']

// console.log("eu gosto de comer", frutas[0])
// console.log("eu gosto de comer", frutas[1])
// console.log("eu gosto de comer", frutas[2])
// console.log("eu gosto de comer", frutas[3])
// console.log("eu gosto de comer", frutas[4])
// console.log("eu gosto de comer", frutas[5])



// variavel de controle; logica de interrupção; modificação da variavel de controle
// for (let indice = 0; indice < 5; indice++) {
    // console.log(indice)
// }



// let indice = 0

// console.log(indice)
// indice++

// // logica de interrupção
// while (indice <= 5) {
//     console.log(indice)
//     indice++
// }

// indice = 0
// indice = 0 + 1 = 1
// indice = 1 + 1 = 2
// indice = 2 + 1 = 3
// indice = 3 + 1 = 4
// indice = 4 + 1 = 5


// let indice2 = 0
// do {
//     console.log(indice2)
//     indice2++
// }
// while (indice2 < 5) // logica de interrupção


for (let indice = 0; indice <= frutas.length - 1; indice++) {
    console.log('eu gosto de comer', frutas[indice])
}

console.log("------")

let indice = frutas.length - 1
while(indice >= 0) {
    console.log('eu gosto de comer', frutas[indice])
    indice--
}


indice = 0

console.log("------", indice)

do {
    console.log('eu gosto de comer', frutas[indice])
    indice++
}
while(indice < frutas.length)

