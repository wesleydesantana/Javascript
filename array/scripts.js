

var nomes  = new Array();
nomes.push('Wesley');
nomes.push('Santana');
console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);

//padrão literal
var frutas = ["Laranja", "Uva", "Abacaxi"];
console.log(frutas);

//contrutor
var frutas = new Array("Laranja", "Uva", "Abacaxi");


//console.dir:
//Exibe uma lista interativa das propriedades do objeto JavaScript especificado. 
//A saída é apresentada como uma lista hierárquica com triângulos que permitem ver o conteúdo de objetos-filho.

console.dir(frutas);


var carros  = []; //criado um array
carros.constructor(); //método construtor
carros.push("Fox", "Astra", "Kadett"); //adicionando valores ao array
var tamanho = carros.length; //tamanho do array
console.log(tamanho);
var ordemAsc = carros.sort(); //ASC
console.log(ordemAsc);
var ordemDesc = carros.reverse(); //DESC
console.log(ordemDesc);

//remove a ultima posição do array
console.log(carros.pop());
//remove a primara posição do array
console.log(carros.shift());

