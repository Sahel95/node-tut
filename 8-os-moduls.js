const names = require('./4-names')
const sayHi= require('./5-utils')
const data = require('./6-alternative-flavor')
// console.log(names.sahel)
// sayHi(names.sahel)
console.log(data)
require('./7-mind-grenade')


// os built-in moduls
const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(os.uptime())

const currentOS = {
    name: os.type(),
    releas: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)


