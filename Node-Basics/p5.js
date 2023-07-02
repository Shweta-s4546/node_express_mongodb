//assert module (package) => exception (run time errors) handling

const assert = require('assert')

//assert(10 > 12)

const x =[ 
    {
        name: "Raju"
    }
]

const y = {
    name :"raju"
};

const z = [
    {
        name: "Raju"
    }
]

//assert.deepStrictEqual(x,y) // structures , datatypes,properties,case

assert.notDeepStrictEqual(x,z)