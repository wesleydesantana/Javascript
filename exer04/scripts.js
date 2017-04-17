//NUMBER


var number = 20;
var objNumber = new Number(20);

console.log(number);
console.log(objNumber);

//Number - Conversões
var textoInteiro = "20";
console.log(typeof textoInteiro);

var inteiro = parseInt(textoInteiro, 10);
console.log(typeof inteiro);

var textoFloat = "10.22";
console.log(typeof textoFloat);

var floats = parseFloat(textoFloat);
console.log(typeof floats);

//toFixed() Está  função retorna uma string
var mil = 1000;
var milStr = mil.toFixed(2);
console.log(typeof milStr);