In this section we can see:

1) what is node modules?
2) How we can use them?
3) How to create your custom modules?
4) How to use OS, FS, events, and HTTP modules.

we can avoid variables and functions in the global scope.

For example. 

We have a file that contains a variable:
```
var hello = 'hello world';
```

and we have another file contain the same variable.
```
var hello = 'New world'
```

So second file variable overrides the first file variable and it does not maintainable.

#### Purpose:
To build a reliable and maintainable application we can use modular architecture using modules. The separate building blocks contain the same code does not override each other because of separation of concern using modularity. Every function and variable is declared in the module scope to only that module.

Every node application has one main module (app.js)
```
console.log(module)
Every node module JSON contains:
{
    id: '.' // current,
    exports: {},
    parent: null,
    filename: // full path to file
    loaded: false,
    children: [],
    paths: [] // paths
}
```

#### EVENTS:

Event is one of the core concepts of nodeJS. A lot of functionality in nodeJS based on events. It is a signal that something has happened in our application.

For e.g every time we receive an HTTP request we can raise an event to handle them.
