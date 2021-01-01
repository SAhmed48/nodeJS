
function absolute(num){

    if (num > 0) return num;
    if (num < 0) return -num;
    return 0;
}

function greet(message){
    return `Welcome ${message}.`;
}

module.exports.absolute = absolute;
module.exports.greet = greet;