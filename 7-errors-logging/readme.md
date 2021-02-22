In this section we can see:

- How to log errors properly?
- How to handle different errors without breaking/stopping our main application?

#### For example:

Suppose we are running a nodeJS application with MongoDB as a database and at some point database connection breaks. The application stops serving clients.

To avoid these situations, we can use error logging and handling techniques.

#### First error (Handle Rejected Promise)

If you are using async/await approach to handle promise. Then wrap the logic into **try/catch** block

for example:

```
try{
    // db call
    res.status(200).send('All good.)
} catch (exception){
    res.status(500).send('Something went wrong.);
}
```

#### Using Promises:

```
fetchUser.then(res => {
res.status(200).send('All good.)
}).catch(err => {
res.status(500).send('Something went wrong.);
});
```

#### Using Express

We can centralize the error handling approach instead of adding try and catch in each route handler.
Create a new middleware asyncMiddleware which can handle all routes handler.

```
function AsyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (execption) {
      next(execption);
    }
  };
}

module.exports = AsyncMiddleware;

// use asyncMiddleware as:
const asyncMiddleware = require("../middleware/async");
router.post(
  "/add-product/",
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let product = await User.findOne({ name: req.body.name });
    if (product) return res.status(400).send("Product already exists.");

    new_product = new Product(req.body);
    await new_product.save();

    res.status(201).send(new_product);
  })
);
```

#### using Express async errors package

- Install package

```
npm i express-async-errors
```

- Import on the top of index.js file.

```
require('express-async-errors');
```

- All done.
- Now express-async-errors handle all the errors itself.

#### Add exceptions logger.

```
npm i winston
```

- Winston can use to log errors and exception in the application.
- Contain multiple transports (console, file, http)
- logging types:

```

 winston.add(
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: "logfile.log" })
);


error => winston.error()
warn => winston.warn()
info => winston.info()
debug => winston.debug()
verbose => winston.verbose()
silly => winston.silly()
```

#### Add mongodb exception loggger

```
npm i winston-mongodb
require("winston-mongodb");

winston.add(
  new winston.transports.MongoDB({
    db: "mongodb://localhost/shop-error",
    level: "error", // only log errors in the db.
  })
);
```

#### How to handle unhandled exceptions at node level:

```
// Handle uncaught Exception

process.on("uncaughtException", (exception) => {
  console.log("We got uncaught Exception.");
  winston.error(exception.message, exception);
});

// Handle uncaught promise Exception

process.on("uncaughtException", (exception) => {
  console.log("We got uncaught Exception.");
  winston.error(exception.message, exception);
});
```
