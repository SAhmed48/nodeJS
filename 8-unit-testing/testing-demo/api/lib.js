
// Number testing
function absolute(num){

    if (num > 0) return num;
    if (num < 0) return -num;
    return 0;
}

// string testing.
function greet(message){
    return `Welcome ${message}.`;
}

// array testing
function getCurrencies(){
    return ['AUD', 'EURO', 'USD', 'RUPEE'];
}

// Object testing
function getProduct(productID){
    return {id: productID, price: 10 };
}


// Exception testing
function registerUser(username){
    if(!username) throw new Error('Username is required.')
    return {username: username, price: 10 };
}


module.exports.absolute = absolute;
module.exports.greet = greet;
module.exports.getCurrencies = getCurrencies;
module.exports.getProduct = getProduct;
module.exports.registerUser = registerUser;