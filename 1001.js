// Adaptado de https://www.beecrowd.com.br/judge/pt/faqs/about/examples
var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\n');

// Escreva a sua solução aqui
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var x = a + b;

console.log(`X = ${x}`);