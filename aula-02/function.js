// função - conjunto de codigo que executa e retorna algo
// método - conjunto de codigo que executa e não retorna nada
// executar ou invocar uma função

function somar(valorA, valorB) {
    return valorA + valorB
}

const subtrair = function(valorC, valorD) {
    return valorC - valorD
}

const multiplicar = (valorE, valorF) => {
    return valorE * valorF
}

const dividir = (valorG, valorH) => valorG / valorH

const curry = (a) => {
    return (b) => {
        console.log(b)
        return (c) => {
            return a + b + c
        }
    }
}


const add = curry(10)


const add2 = add(20)(30)

console.log(add2)




