const pets = [
    {
        name: 'Kika',
        type: 'Dog',
        age: 10,
        sex: 'female',
        weight: 8,
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

    {
        name: 'Olaf',
        type: 'Dog',
        age: '1',
        sex: 'Male',
        weight: 5,
    }
]

const totalWeightDogs = pets.filter((pet) => {
    return pet.type === 'Dog'
})


.reduce((total, pet) => {

    return  total + pet.weight
    
    
},0)

 console.log(totalWeightDogs)