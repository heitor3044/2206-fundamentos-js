// Função padrão

function apresentar(none) {
    return `Meu nome é ${nome}`
}

// Arrow function

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10 ) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressão

// operador maior ou igual que
//>=