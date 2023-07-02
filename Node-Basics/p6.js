//Buffer i.e, allocate memory

const buf = Buffer.alloc(2)
console.log('safe memory =', buf);

//unsafe memory
const buf1 = Buffer.allocUnsafe(2)
console.log('unsafe memory =', buf1)// possible to have garbage value

//ASCII value
const buf2 = Buffer.from('Raj kumar')
console.log('ascii =' , buf2)

//ASCI to string
console.log('string =', buf2.toString())

//concat
let a1 = Buffer.from('welcome to ')
let a2 = Buffer.from('Node js server script')

let res = [a1,a2]

let out = Buffer.concat(res)

console.log('out =', out)
console.log('out string=', out.toString())
