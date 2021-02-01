/* 
Reduce

Executa uma função para cada elemento retornando um único valor.

*/

const pets = [
    {
        name: 'Kika',
        type: 'Dog',
        age: 10,
        sex: 'female',
        weight: 3,
    },

    {
        name: 'Miau',
        type: 'Cat',
        age: 2,
        sex: 'Male',
        weight: 1.5,
    },

    {
        name: 'Glub',
        type: 'Fish',
        age: 1,
        sex: 'Undetermined',
        weight: 0.01,
    },
]


// Exemplo: Calcular o preço de todos os animais juntos

const totalWeight = pets.reduce((total, pet) => {

    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0 })

console.log(totalWeight)

