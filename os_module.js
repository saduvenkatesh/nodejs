const os = require('os')

const user = os.userInfo()  // info about user
console.log(user);


//mmethod returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name : os.type(),
    release  :os.release(),
    totalmem : os.totalmem(),
    freemem  : os.freemem(),
}

console.log(currentOs)