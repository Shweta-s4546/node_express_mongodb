//import numbers from './content.numbers'


const names = require('./content/names')

console.log('users1 =', names.users1)
console.log('users2 =', names.users2)
console.log('users3 =', names.users3)

const numbers = require('./content/numbers')

const result = numbers.x * numbers.y * numbers.z
console.log('product =', result)