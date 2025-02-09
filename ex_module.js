//const names = require('./names')
//const {name1, name2} = require('./names') // Another way (destructing object)
const sayHi = require('./greetFunc')
const data = require('./names')
console.log(data);
console.log(data.venkatesh.name,data.venkatesh.ra_no, data.venkatesh.cgpa);
console.log(data.reethu.name,data.reethu.ra_no, data.reethu.cgpa);

//sayHi(name1)
//sayHi(name2)
sayHi('Sadu')