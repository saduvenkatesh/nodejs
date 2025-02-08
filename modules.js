// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const person1 = "Venkatesh"
const person2 = "Ramu"

const sayHi = (name)=>{
    console.log(`Hello there ${name}`)
}

sayHi('sadu')
sayHi(person1)
sayHi(person2)