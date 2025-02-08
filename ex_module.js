//const names = require('./names')
const {name1, name2} = require('./names') // Another way (destructing object)
const sayHi = require('./greetFunc')

sayHi(name1)
sayHi(name2)
sayHi('Sadu')