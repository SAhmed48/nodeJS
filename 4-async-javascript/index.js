function add(a,b){
    return a + b;
}

function multiply(a,b){
    setTimeout(() => {
        return console.log("Multplication out", a * b);
    }, 2000);
}

function subtract(a,b){
    return a - b;
}

console.log('Addition output', add(2, 4)); // calling blockng function add
console.log('Multiplication output', multiply(3, 6)) // calling non-blocking function
console.log('Subtraction output',subtract(3, 5)); // calling blocking function


// Callback to handle async output case

console.log('Hello Callbacks');

getUser(1, (user) => {
    console.log("User result", user);
});

console.log('Bye Callbacks')


function getUser(id, callback){
    setTimeout(() => {
        callback({id: id,  username: 'Salman Ahmed'});
    }, 3000);
}
