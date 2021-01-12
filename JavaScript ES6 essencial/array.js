const users = ['Pinalli', 'Alberto','Rocha'];

const gender = {
    MAN: Symbol('M'),
    WOMAN:Symbol('W')
}

const persons = [
    {
    name:'Alberto',
    age: '50',
    gender:gender.MAN
 },
 {
    name:'Peter',
    age: '53',
    gender:gender.MAN
 },
 {
    name:'Jenifer',
    age: '27',
    gender:gender.WOMAN
 }
];
//retorna a qtd de itens do array

console.log('Qtd Itens no array', persons.length);

//Verifica se é array
console.log('Avaraiavel persosn é um array: ',Array.isArray(persons));

//iterar iten de um array
persons.forEach(persons => {
    console.log(`Nome: ${person.name}`);
});