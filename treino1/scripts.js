var valor = new Number(9.9);
console.log(valor);
formatado = valor.toFixed(2);
console.log(formatado);
formatado = "R$ " + formatado;
console.log(formatado);
formatado = formatado.replace('.', ',');
console.log(formatado);
