## NodeJS Learning Path

##### What is NodeJS ?
Ryan Dahl is the creator of NodeJS. He thinks why not we can execute javascript outside the browser, So he took chrome V8 JS engine and embed it into c++ code and named it **node.exe** and run it similar to browser, now node uses javascript and runs on the server-side. 

Node is not a programming language. It is a runtime environment for executing javascript code outside the browser. 

Quite often we can use nodeJS to build backend-services like APIs (Application programming interfaces). These services help our client-side applications like (Web-applications, mobile applications) to work efficiently. Using node at backend we can save, store data, send an email, push notifications, etc.

#### Ideal
Node is ideal for building highly-scalable, data-intensive, and real-time applications because of non-blocking behavior (asynchronous) architecture.
It is single-threaded. let us look into it. 

#### How NODE works:
A request (fetch data) comes to single-thread. The thread call database to fetch data. At the same time, another request come and the thread start serving it. When the first request is finished the data fetch from DB then thread return it as a response.

Single thread all works using **EVENT QUEUE**. It monitors the event QUEUE and check if the data is ready or not.

It is best for I/O and data-intensive tasks. (client-serving)

Not good for CPU intensive task like (Image manipulation, video encoding)

#### Benefits:
1) Great for prototyping and agile development.
2) Super fast and highly scalable.
3) Good choice to build highly scalable applications.
4) use javascript everywhere so need to learn any new language. 
5) Cleaner and more consistent codebase.
6) large eco-system of open-source libraries.

#### Companies using node.
Uber, Paypal, NetFlix are using nodeJS in production.
Paypal Stats shows nodeJS built twice as fast with fewer developers.
fewer lines of code and 40% fewer files.
Increase 2x req/sec and 35% faster response time.



#### Section 1: Node Module System
- How to use EVENTS, HTTPS, OS, and FS module.
- How to create your custom module, export, and import the module in other files.
- How nodeJS wraps the single file into a module wrapper function and treat it as a module.

#### Section 2: Node Package Manager (NPM)
- How to download packages from npm.
- Purpose of different flags in npm command.
- How to create your package and publish on npm.

#### Section 3: Build rest APIs with Express Framework:
- How to install and configure the Express framework.
- How to create APIs.
- How to perform crud operations.

#### Section 4: Asynchronous Javascript

- How Asynchronous and synchronous javascript works.
- How callbacks, promises and async/await works.

#### Section 5: Store data in MongoDB.
- What is NoSql?
- How to use MongoDB in nodeJS.
- How to store, retrieve, update, and delete data from MongoDB.

#### Section 6: Authentication and Authorization
- How to authenticate a user using JSON web token (JWT).
- How to authorize a user.

#### Section 7: Handling and Logging Errors
- How to handle server-side errors.
- How to log errors in a production application.

#### Section 8: Unit Testing Integration
- What is unit testing?
- Difference between unit testing, Integration test and end-to-end testing.
- How to write test cases?

#### Section 9: Deployment 
- How to deploy an application.
- Application deployment example on Heroku.
