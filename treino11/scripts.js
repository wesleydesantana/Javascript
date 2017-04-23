/*var cliente;
var i = true;

while(i == true){
	cliente = prompt('Digite o nome do cliente');
	i = confirm('Deseja cadastrar um novo cliente');
	console.log(cliente);
}
*/

confirmar = true;

for(var i = 0; confirmar == true; i++){
	var cliente = prompt('Digite o nome do cliente');
	console.log(i + " - " + cliente);
	confirmar = confirm("Deseja cadastrar um novo cliente");
}
