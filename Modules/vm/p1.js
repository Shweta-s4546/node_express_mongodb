const vm = require('vm')

let user = {
    name : "Raj",
    email: "raj@gmail.com",
    mobile:"987698769"
}

console.log('before = ', user)

vm.createContext(user)
vm.runInContext(`name="Manoj";email="manoj@gamil.com"`, user)

console.log('after =', user)