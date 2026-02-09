// Transforme as funções tradicionais abaixo em arrow functions de uma única linha.

// 1. Dobrar um número
function dobrar(n) {
  return n * 2;
}

const dobrar = (n) => n * 2;

// 2. Criar uma saudação
function saudar(nome) {
  return "Olá, " + nome + "!";
}

const saudar = (nome) => "Olá" + nome + "!";

// 3. Somar números
function somar(a, b) {
  return a + b;
}

const somar = (a, b) => a + b;

// 4. Verificar se é par
function ehPar(n) {
  return n % 2 === 0;
}

const ehPar = (n) => n % 2 === 0;

// 5. Converter Celsius para Fahrenheit
function converter(celsius) {
  return (celsius * 9) / 5 + 32;
}

const converter = (celsius) => (celsius * 9) / 5 + 32;

// 6. Função que recebe um número e retorna o valor dele multiplicado por 10
function multiDez(n) {
  return n * 10;
}

const multiplicarPorDez = (n) => m * 10;

// 7. Função que recebe a idade em anos e retorna a idade convertida em dias
function idadeEmDias(n) {
  return n * 365;
}

const idadeEmDias = (n) => n * 365;

// 8. Converter letras para Maiúsculo
function gritar(string) {
  return string.toUpperCase();
}

const gritar = (texto) => texto.toUpperCase();

// 9. Desconto de 5%
function aplicarDesconto(n) {
  return n * 0.05;
}

const desconto = (n) => n * 0.05;

// 10. Subtração Simples
function somar(a, b) {
  return a - b;
}

const somar = (a, b) => a - b;
