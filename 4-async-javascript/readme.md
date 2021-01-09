In this section, we are going to see how javascript works synchronously and asynchronously.

Javascript is a single-threaded language. 
It does not handle tasks concurrently, 
Tt just schedule a task to execute later on. 
It maintains an event loop and look in it to see schedule task is ready to output.

Synchronous means blocking.
Asynchronous means non-blocking.

For example:

function add(a,b){
    return a + b;
}

function multiply(a,b){
    setTimeout(() => {
        return console.log("Multiplication out", a * b);
    }, 2000);
}

function subtract(a,b){
    return a - b;
}

console.log('Addition output', add(2, 4)); // calling blockng function add
console.log('Multiplication output', multiply(3, 6)) // calling non-blocking function
console.log('Subtraction output',subtract(3, 5)); // calling blocking function

Output:

Addition output 6
Multiplication output undefined
Subtraction output -2
Multiplication out 18

#### How we can stop and wait for async to finish and store their result?

In the above example we got **Multiplication output undefined**, the reason is the program does not wait for output.
How to wait for async functions to finish and assigned its output value
we have three patterns to achieve this:

1) Callbacks // old one
2) Promises // Good one
3) Async/await // nice one

#### What is a promise?

An object which holds an eventual result of an asynchronous operation.
A promise can give us output it promised.

The output can be in three forms:

Pending (async operation executing)
Fulfilled (async operation outputs)
Rejected (some error or execution stops)
