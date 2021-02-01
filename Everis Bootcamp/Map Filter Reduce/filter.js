/*

Teoria

O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

Exemplo: 
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
filtrado é [12, 130, 44]

Fonte: MDN

*/
const pets =[ 
    {
        name: 'Kika',
        type: 'Dog',
        age: '10',
        sex: 'female',
    },

    {
        name: 'Miau',
        type: 'Cat',
        age: '2',
        sex: 'Male',
    },

    {
        name: 'Glub',
        type: 'Fish',
        age: '1',
        sex: 'Undetermined',
    },
]

const menorQueCinco = (numero) => {
    return numero < 5
}

const  newPets = pets.filter((pet) =>{
    return menorQueCinco(pet.age); //recebe a idade do pet como parâmetro para verificação na função
});


console.log(pets);
console.log(newPets);


