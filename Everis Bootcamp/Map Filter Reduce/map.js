/* Teoria */
/*
Definição: 
O método map() invoca a função callback  passada por argumento para cada elemento do Array e devolve um novo Array com a mesma quantidade de elementos como resultado.

Sintaxe:
arr.map(callback[, thisArg])

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

/*Exemplo: pegar apenas o nome dos pets no array de pets */

const petNames = pets.map((pet) => {
    return pet.name;
})

console.log(petNames)