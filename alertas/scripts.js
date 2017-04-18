//alert

alert('Mensagem');

//confirm
var teste = confirm('Deseja relamente realizar a ação');

if(teste == true){
	alert('true');
}else{
	alert('false');
}

//prompt

var nome = prompt('Qual seu nome?');

var idade = prompt('Qual sua idade?', '19');


//Exemplo de validação

if(idade == ""){
	alert("Preencha a idade");
}else if(idade <= 18){
	alert("Reprovado");
}else{
	alert("Aprovado");
}