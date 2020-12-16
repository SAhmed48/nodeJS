const os = require('os');

function logCpuMem(){
    console.log(`Total Memory: ${os.totalmem()} --- 
                 Free Memory: ${os.freemem()}`);
}


module.exports = logCpuMem;