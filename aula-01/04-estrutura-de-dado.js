const numeros = [1, 2, 3, 4]
// tem 4 itens
// indice vai até 3

// spread
const nums = [ ...numeros ]

numeros[0] = 5
nums[0] = 6


console.log(numeros);
console.log(nums);

