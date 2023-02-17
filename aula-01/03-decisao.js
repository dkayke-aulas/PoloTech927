// > maior que
// < menor que
// >= maior ou igual
// <= menor ou igual
// == igual
// === estritamente igual
// != diferente
// !== estritamente diferente
// && AND - 1 valor falso, resultado falso
// || OR - 1 valor true, resultado true

const ehMulher = false
const ehFilhx = true

// if (ehMulher === true && ehFilhx === true) {
//     console.log("é a filhA do dono")
// }
// else if (ehMulher === true && ehFilhx === false) {
//     console.log("não é a filhA do dono")
// }
// else if (ehMulher === false && ehFilhx === true) {
//     console.log("é o filhO do dono")
// }
// else if (ehMulher === false && ehFilhx === false) {
//     console.log("não é o filhO do dono")
// }




// 0 - lista, 1 - deleta, 2 - sai, x - não entende
const opcao = "banana"

// if (opcao == 0 || opcao == 5) {
//     console.log('lista')
// }
// else if (opcao == "banana" && idade < 10) {
//     console.log('deleta')
// }

// switch (opcao) {
//     case 0:
//     case 5:
//         console.log('lista')
//         break
//     case 1:
//         console.log('deleta')
//         break
//     case 2:
//         console.log('sai')
//         break
//     default: 
//         console.log('não entendi')
//         break
// }


// operador logico ternário
const idade = 45
const ehMaiorDeIdade = idade >= 18 ? "É maior de idade" : "É menor de idade"

// if(idade >= 18) {
//     ehMaiorDeIdade = "É maior de idade"
// }
// else {
//     ehMaiorDeIdade = "É menor de idade"
// }

console.log(ehMaiorDeIdade);