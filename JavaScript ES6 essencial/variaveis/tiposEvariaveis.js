/*
string number boolean null undefined symbol Object Function Array
*/ 
//retoorna um array quebrando a string por um delimitador
const textSize = 'Texto'.length;
console.log('\nQuantidade de letras: ', textSize );

//retoorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posicoes separads pelo delimitador : ', splittedText);

//busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text','txeT');
console.log('\nSubstiutição de valor: ', replacedText);

//retorna fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string: ',lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primeira letra menos a ultima: ',allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a ultima: ',secondToEnd);

//retorna n caracters a partir de uma posicao
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são: ',twoCharsBeforeFirstPos);