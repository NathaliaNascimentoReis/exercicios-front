// Transforme as funções tradicionais abaixo em arrow functions de uma única linha.

// 1- Dobrar um número
function dobrar(n) {
    return n * 2;
}

const dobrar = (n) => n * 2;

// 2. Criar uma saudação
function saudar(nome) {
    return "Olá, " + nome + "!";
}

const saudar = nome => "Olá" + nome + "!";

// 3- Somar números
function somar(a, b) {
    return (a + b);
}

const somar = (a, b) => a + b;

// Verificar se é par
function ehPar(n) {
    return n % 2 === 0;
}

const ehPar = n => n % 2 === 0;

// 5. Converter Celsius para Fahrenheit
function converter(celsius) {
    return (celsius * 9/5) + 32;
}

const converter = celsius => (celsius * 9/5) + 32;
