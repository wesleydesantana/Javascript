// ATRIBUTOS E MÉTODOS


var empresa  = "Google";
var frase = "Foco é dizer não";
console.log(empresa);
console.log(empresa.length);  //Tamanho da String

//Posição da parte procurada a partir da posição 0
console.log(frase.indexOf("dizer"));

//Retorna a partir da posção 0 a posição passada
console.log(frase.charAt(7));

//Extrai uma quantidade de caracteres a partir da posição inicial
console.log(frase.substr(2, 4));

//Substitui o conteúdo da String
console.log(frase.replace("não", "sim"));