In this section we learn:

1) How to use an express framework?
2) How to create rest APIs?
3) What is Express?
4) what is middleware?
5) How to do debugging?
6) How to do the configuration of the application?

Express is a fast and lightweight web framework.  It is the most popular web framework.  It gives a project a proper structure.

###### Middleware:
In express we have two things in Middleware:

1) Express middleware.
2) Middleware functions.

In middleware functions, we return a response based on custom logic.

For example: 
```
app.get('/courses', (req, res) => {
    res.send('Some custom response.)
});
```
In the above function:
app.get() is a middleware.

The arrow function contains by the app.get() is the middleware function.

#### Second Example:

Request Processing Pipeline:

request ---> middleware 1 (convert req.body into json object) ---> middleware 2 (route (application route)) -----> response (send to client)

Initially, we get a request from a client.
Then pass the request to **middleware 1 -- JSON()** which converts the request body into a JSON object.
Then Pass the JSON object to **middleware 2 -- route** which does some business logic on it.
Then send a response to the client and terminate.

#### How to create a custom middleware function into Express.
```
const loggingFnc = (req, res, next) => 
{ 
    console.log('Logging Fnc'); next();
}

app.use(loggingFnc);
```
We created a simple logging function and put it into middleware as a middleware function.

There are a few things to note:
1) req: request 
2) res: response
3) next: The next is used to pass control to the next middleware function in the request processing pipeline.

**Note**:
If we do not use next() function in middleware then control stall and it does not pass control to next middleware.

#### Env
Get env information using
``` 
app.get('env')
```
If env is set from the command line as production then it outputs production otherwise development.

We can also get an env variable using.
```
-- process.env.NODE_ENV // if set then value otherwise undefined
```


### Configurations
In this section, we see how to use different configurations for production, development, and staging env.

Two most popular packages:
1) rc
2) Config

I recommend using the config package which is very nice and easy to use.
1) Create a config folder.
2) Create your env JSON files (default.json, development.json, production.json)
3) Add your env specific settings in it.
4) Go to your main index.js file.
5) Import config package.

#### Debugging

A lot of times we use console.log() at different places in the application for debugging.
To avoid console.log() can we use the third-party package **debug** we help us to debug the application.
```
-- npm i debug
```
1) Import package in any file on the start.
```
const debug = require('debug')('app:namespace); 

// you can set different namespaces here. 
// debug only DB then namespace should be **'app:db'**

debug('Your debug Message');

Set debug mode from environment variables.

export DEBUG=app:* // * wildcard for every namespace.

export DEBUG=app:db // only console logs of db namespace.
```
#### Templating Engine

Sometimes we need to show HTML to users. So we use templates in the express.

The templating engine is:
1) Pug
2) Mostache
3) Ejs

-- npm i Pug

// Setting templating engine
app.set('view engine', 'pug'); // set template engine to Pug
app.set('views', './views'); // default set dir of views


#### Data integration

Adding the capability to connect databases to Express apps is just a matter of loading an appropriate Node.js driver for the database in your app. Please visit this link to get more idea and use of different databases.

https://expressjs.com/en/guide/database-integration.html