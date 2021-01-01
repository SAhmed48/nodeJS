In this section, we can see:

1) What is automated testing? 
2) Is it what we need? 
3) How should we do it? 
4) Test drive development or code first?

These are all questions everyone thinks about it while start writing code for applications.

#### Automated testing
The practice of writing code to test our code and then run those written tests in an automated fashion.
So, in automated testing our application code consists of:
1) Production code
2) Tests code

Now we a have function to **calculate ROI** in the application. If we do manual testing then we can:
1) launch an application.
2) Sign-in the application.
3) Open the page on ROI calculation runs.
4) Then test it and verify it.

Each time we need to perform all these steps to test this function. It contains a lot of steps and takes extra time plus resources.
As our application grows our test cases increase exponentially with it.

To avoid all these things we can use automated testing.

In automated testing, we can write a test code to verify **calculate ROI** every time before code commit or before deployment.
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
Tests the unit of the application without testing its external dependencies. (Such as Files, Databases, Queues, etc)

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
2) very brittle (A small change in application breaks test cases)

#### Test Pyramid
                 _____
                /     \
               /       \
              /  E2E    \
             /           \
            / Integration \
           /               \
          /                 \
         /  Unit Testing     \
        /_____________________\


#### Tooling

To write and run tests we need tools (library, test runner).

Popular testing framework:
- **Jasmine** (It is an early player and have a lot of functionalities.)
- **Mocha** (It needs extra plugin for complete functionality like **Chai** **Sinon**)
- **Jest** (It is a wrapper on Jasmine. Used by Facebook for reactJS application.)

#### TAKEAWAY
**Focus on testing fundamentals instead of tools.**

#### Write first test case:

1) Install jest package first. 
```
npm install jest --save-dev // (--save-dev) means we only need it in the development env.
```
2) Create a test folder.

3) Create a new file for testing the application file.
```
tests ---- > authApi.test.js
```

5) Go to package.json. In scripts add "test": "jest".

6) Run test.
```
npm run test
```
It outputs the summary of all test cases.

```
> jest

 PASS  tests/lib.test.js
  ✓ First test case (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.135 s
Ran all test suites.
```

#### Check absolute Number:
```
const lib = require('../api/lib');

// first argument is test name.
// second argument is a function to run a test.

test('Absolute Test -- should return positive if input positive', () => {
    const result = lib.absolute(1)
    expect(result).toBe(1);
});


test('Absolute Test -- should return positive if input negative', () => {
    const result = lib.absolute(-1)
    expect(result).toBe(1);
});

test('Absolute Test -- should return 0 if input 0', () => {
    const result = lib.absolute(0)
    expect(result).toBe(0);
});
```

#### Group Related Test:
```
describe('Absolute', () => {
    it('should return positive if input positive', () => {
        const result = lib.absolute(1)
        expect(result).toBe(1);
    });
    
    it('should return positive if input negative', () => {
        const result = lib.absolute(-1)
        expect(result).toBe(1);
    });
    
    it('should return 0 if input 0', () => {
        const result = lib.absolute(0)
        expect(result).toBe(0);
    });
});
```