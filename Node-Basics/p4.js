const numbers =  require('./content/numbers')
const names = require('./content/names')
const methods = require('./content/method')

methods.sayHi(names.users1)
methods.sayHi(names.users2)
methods.sayHi(names.users3)

console.log("sum = ", methods.sum(numbers.x, numbers.y,numbers.z))