const os = require('os')
//we can use modules info inside an object
const currentOS = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeMemory: os.freemem()
}

