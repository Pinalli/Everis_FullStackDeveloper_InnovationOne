const number = 12.4567;

//transfomar numero em string
const numberAsString = number.toString();
console.log('\nNumero convertido em string ',  number , typeof numberAsString);

//retorna numenro com qtd de casa decimais
const fixedTwoDecimals = number.toFixed(2);
console.log('\n Numero com duas casas decimais',fixedTwoDecimals );

// Converte string em float
console.log('\nSting parseada em float:', parseFloat('13.22'));

//convert uma string em int
console.log('\n String parseada para int:', parseInt ('13.20'));