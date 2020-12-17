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

#### Env

Get env information using 
-- app.get('env')

If env is set from command line as production then it outputs production otherwise development.

We can also get env variable using.
-- process.env.NODE_ENV // if set then value otherwise undefined


### Configurations
In this section we see how to use different configurations for production, development and staging env.

Two most popular packages:
1) rc
2) config

I recommend to use config package which is very nice and easy to use.
1) Create a config folder.
2) Create your envs json files (default.json, development.json, production.json)
3) Add your env specific settings in it.
4) Go to your main index.js file.
5) Import config package.

#### Debugging

Lot of times we use console.log() at different places in application for debugging.
To avoid console.log() can we use third party package **debug** we helps us to debug application.

-- npm i debug

1) Import package in any file on the start.

-- const debug = require('debug')('app:namespace); 
// you can set different namespace here. 
// Debug only DB then namespace should be **'app:db'**

debug('Your debug Message');

Set debug mode from environments variables.

export DEBUG=app:* // * wildcard for every namespace.

export DEBUG=app:db // only console logs of db namespace.

#### Templating Engine

Sometimes we need to show html to users. So we use templates in express.

The templating engine are:
1) Pug
2) Mostache
3) Ejs

-- npm i Pug

// Setting templating engine
app.set('view engine', 'pug'); // set template engine to Pug
app.set('views', './views'); // default set dir of views