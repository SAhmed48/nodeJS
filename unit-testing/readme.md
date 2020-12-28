In this Section, we can see:

1) What is automated testing? 
2) Is it really we need? 
3) How should we do it? 
4) Test drive development or code first?

These are all questions everyone think about it while start writing code for applications.

#### Automated testing
The practice of writing code to test our code and then run those written tests in an automated fashion.
So, in automated testing our application code consist of:
1) Production code
2) Tests code

Now we a have function to **calculateROI** in the application. If we do manual testing then we can:
1) launch an application.
2) Sign-in the application.
3) Open the page on ROI calculation runs.
4) Then test it and verify it.

Each time we need to perform all these steps to test this function. It contain a lot of steps and take extra time plus resources.
As our application grows our test cases increase exponentially with it.

To avoid all these things we can use automated testing.

In automated testing we can write a test code to verify **calculateROI** everytime before code commit or before deployment.
We can run thousands of automated tests in a few seconds to test our application.

#### Benefits of automated testing:
1) Test code frequently, in less time.
2) Identify/catch bugs before deployment.
3) Increase confidence in deployment.
4) Improve code quality.
5) Refactor code with confidence. (Refactoring means changing the structure of code without changing its behaviors.)
6) Focus more on code quality.

#### Types of Automated tests:

1) Unit testing
2) Integration testing
3) End-to-end testing

#### Unit testing:
Tests the unit of the application without testing its external dependencies.(Such as: Files, Databases, Queues etc)

Benefits:
1) Cheap to write.
2) Fast to execute.

#### Integration Testing:
Tests the application with its external dependencies.

1) Take a longer time to execute.

#### End-to-End test:

Drives an application through its UI.

Tool:
Selenium (Rember user interaction with UI and then run to check code is performing right or not)

1) Very slow
2) very brittle (small change in application breaks test cases)