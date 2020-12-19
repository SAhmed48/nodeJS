# NodeJS Learning Path

## How this repo is structured.

###### What is NodeJS?
Ryan Dahl is the creator of NodeJS. He thinks why not we can execute javascript outside of a browser, So he took chrome V8 JS engine and embed it into c++ code and named it node.exe and run similar to browser, now node use javascript and run on the server-side. Node is not a programming language. It is a runtime environment for executing javascript code outside the browser. Quite often we can use nodejs to build backend-services like APIs (Application programming interfaces). These services helps our client-side applications like (Web-applications, mobile applications) to work efficiently. Using node at backend we can save, store data, send email, push notifications etc.

Node is a ideal for building highly-scalable, data-intensive and real-time applications because of non-blocking behaviour (asynchronous) architecture.
It is single-threaded. lets look into it. 

How it works:
A request (fetch data) comes to single-thread. The thread call database to fetch data. In the same time another request come and thread start serving it. When First request fetch data from db complete then thread return it as a response.

Single thread all works using **EVENT QUEUE**. It mointors the event QUEUE and check if data is ready or not.

It is best for I/O and data intensive task.(client serving)

Not good for CPU intensive task like (Image manipulation, video encoding)


Benefits:
1) Great for prototyping and agile development.
2) Superfast and highly scalable.

Uber, Paypal, netflix are using nodeJS in production.
Paypal Stats shows nodeJS built twice as fast with fewer developers.
fewer lines of code and 40% fewer files.
Increase 2x req/sec and 35% faster response time.

3) Good choice to build highly scalable applications.
4) use javascript everywhere so need to learn any new language. 
5) Cleaner and more consistent codebase.
6) large eco-system of open-source libraries.



#### Section 1: Node Module System
How to use EVENTS, HTTPS, OS and FS module.
How to create your on module, export and import the module in other file.
How nodeJS wraps the single file into module wrapper function and treat it as a module.

#### Section 2: Node Package Manager (NPM)
How to download packages from npm.
Purpose of different flags in npm command.
How to create your own package and publish on npm.

#### Section 3: Build rest APIs with Express Framework:
How to install and configure Express framework.
How to create APIs.
How to perform crud operations.

#### Section 4: Asynchronous Javascript

How Asynchronous and synchronous javascript works.
How callbacks, promises and async/await works.

#### Section 5: Stroing Data into MongoDB
What is NoSql.
How to use Mongodb in nodeJS.
How to store, retrieve, update and delete data from mongodb.

#### Section 6: Authentication and Authorization
How to authenticate user using Json web token (JWT).
How to authorize user.

#### Section 7: Handling and Logging Errors
How to handle server side errors.
How log errors in the production.

#### Section 8: Unit Testing Integration
What is unit testing.
How to write test case.

#### Section 9: Deployment 
How to deploy application.
Application deployment example on Heroku.
