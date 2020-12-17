In this section we learn:

How to use express framework?
How to create rest apis?
What is Express?
what is middleware?
How to do debugging?
How to do configuration of application?

Express is a fast and light weight web framework. 
It is a most popular web framework. 
It gives a project a proper structure.

Middleware:
In express we have two things in Middleware:

1) Express middleware.
2) Middleware functions.

In middleware functions we return response based on custom logic.

For example: 

app.get('/courses', (req, res) => {
    res.send('Some custom response.)
});

In the above function:
app.get() is a middleware.

The arrow function contain by app.get() is the middleware function.

#### Second Example:

Request Processing Pipeline:

request ---> middleware 1 (convert req.body into json object) ---> middleware 2 (route (application route)) -----> response (send to client)

Initially we get request from client.
Then pass request to **middleware 1 -- JSON()** which converts request body into JSON object.
Then Pass JSON object to **middleware 2 -- route** which do some business logic on it.
Then send response to client and terminate.

#### How to create custom middleware function into Express.

const loggingFnc = (req, res, next) => { console.log('Logging Fnc'); next(); }

app.use(loggingFnc);

We created a simple logging function and put into middleware as a middleware function.

There are few things to note:
1) req: request 
2) res: response
3) next: The next is use to pass control to next middleware function in the request processing pipeline.

**Note**:
If we not use next() function in middleware then control stall and it does not pass control to next middleware.