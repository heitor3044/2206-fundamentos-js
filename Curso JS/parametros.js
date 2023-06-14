//parâmetros de função

function soma (num1, num2) {
    return num1 + num2;
}

// console.log(soma(2, 2))
// console.log(soma(245, 540))
// console.log(soma(325, 605))

// parâmetros x argumento

// ordem dos parâmetros

function nomeIdade (nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

// console.log(nomeIdade(Heitor, 16))

function multiplica (num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(multiplica(soma(2, 5)))
