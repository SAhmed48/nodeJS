In this section we can see:

1) How to log errors properly?
2) How to handle different errors without breaking/stopping our main application?

For example:
Suppose we are running a nodeJS application with MongoDB as a database and at some point database connection breaks. The application stops serving clients. 

To avoid these situations we can use error logging and handling techniques.

#### First error (Handle Rejected Promise)

If you are using async/await approach to handle promise. Then wrap the logic into **try/catch** block

for example:
try{
    // db call
    res.status(200).send('All good.)
} catch (exception){
    res.status(500).send('Something went wrong.);
}

#### Using Promises:

fetchUser.then(res => {
    res.status(200).send('All good.)
}).catch(err => { 
    res.status(500).send('Something went wrong.);
});

#### Using Express
We can centralize the error handling approach instead of adding try and catch in each route handler.
Create a new middleware which can handle all routes handler.