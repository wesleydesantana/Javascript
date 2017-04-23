nome 		= new String(prompt('Digite o nome do vendedor'));
calca 		= new Number(prompt('Digite o valor da calça'));
quantidade 	= new Number(prompt('Digite a quantidade de calças'));

comissao = 25.00;
salario = 1000.00;
salario_total = (quantidade * comissao) + salario;
alert('Salario Bruto: ' + salario_total);