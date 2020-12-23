In this section, we can see:

1) How to create relationships between different tables?

We have two data modeling approaches here same as SQL:

1) Normalization --- Using References -- CONSISTENCY

Example:
```
let author = {
    name: 'Salman Ahmed'
}

let course = {
    author : 'id'
}
```
If we change the author's name in an author table it reflects in all courses also, but we need two queries here. One to get the course data and the second to get the author data. This approach makes data consistent but has a performance issue.

In SQL databases we have a data integrity concept, But in the NoSql there is no concept of data integrity.
There is no association between both objects course and author.
Mongo DB does not know that a course object contains a reference to the author object.

2) Denormalization -- Using Embedded Documents -- INCONSISTENCY --- INCREASE PERFORMANCE
```
const course = {
    author: {
        name: 'Salman Ahmed'
    }
}
```
If we want to change the author's name later on then we need to update all the documents which contain the same author, this makes data inconsistent. If on any point our update query fails then all the documents do not contain the updated author's name.


3) // Hybrid Approach
```
let author = {
    name: 'Salman Ahmed'
}

let course = {
    author : {
        id: 'ref',
        name: 'Salman Ahmed'
    }
}
```
In this approach, we store the author properties which we need frequently with the reference of the author document. This approach increases performance and also consistency.

#### Which approach to use:
Each approach has its weakness and constraints.
Which approach to use depends on the application, scenario, and query requirements. 
The best approach to design schema in NoSql databases is based on the query requirements.
There is a trade-off between query performance and consistency.

#### Get reference document.

```
const courses = await Course
    .find()
    .populate('author', 'name bio website -_id')
    .select('name author')
```
mongoose populate method is used to get reference documents. The second parameter of the populate method contains the fields to get from the reference document. **-** means to exclude the **_id** field.

#### Embedding Document

```
const AuthorSchema = new Schema({
    name: String,
    bio: String,
    website: String
});

const CourseSchema = new Schema({
    name: String,
    author: AuthorSchema // use direct author schema doc in the course.
});

// creating new course with author as a embedded document.
async function createCourse(authorID){
    const author = new Author({ name: 'Salman Ahmed' });

    const courseCreate = new Course({
        name: "NodeJS",
        author
    });
    const courseDoc = await courseCreate.save();
}
```
In the above example, we are embedding the author directly into the course document instead of creating the author schema first then add reference of the author document to the course document.

#### Sub Documents Array

```
const AuthorSchema = new Schema({
    name: String,
    bio: String,
    website: String
});

const CourseSchema = new Schema({
    name: String,
    authors: [AuthorSchema] // using array containing author schema sub-doc in the course.
});

// creating new course with multiple authors as a embedded document.
async function createCourse(authorID){
    const author1 = new Author({ name: 'Salman Ahmed' });
    const author2 = new Author({ name: 'Deno Altis' });
    const authors = [...author1, ...author2];

    const courseCreate = new Course({
        name: "NodeJS",
        authors
    });
    const courseDoc = await courseCreate.save();
}
```

#### Transactions
In SQL databases we have a concept of transactions, which means we can do multiple operations as a combined operation, and if any of the operations of combined operations fails we can rollback the database to its previous state.

In NoSQL, we do not have any transaction concept, but we can achieve it using **Two-phase commit** in the mongo DB.

```
Install third-party package 
npm install fawn --save // fawn used internally two-phase commit.

const mongoose = require('mongoose');
const Fawn = require('fawn');
Fawn.init(mongoose);

// Now we can do a transaction with two operations. Save author document first and then course document.
// Call run in the end. we don;t call run non of operation can perform.
new Fawn.Task()
    .save('author', authorObject)
    .save('course', courseObject)
    .run()

// read more about fawn and explore it.
```

#### How mongo-DB _id works?

```
_id: '2abcd34hh2389nb333x2e222'

The id consist of total 12 bytes:
    // 4 : the first bytes are (timestamp)
    // 3 : the next 3 bytes are (machine identifier -- on which mongodb running)
    // 2 : the next 2 bytes are (process identifier -- process which are running mongodb)
    // 3 : counter (auto incremented number)
```
So there is a low chance that the same id is generated twice by Mongo DB.

Let's do some math behind these bytes:
```
1 byte = 8 bits
2 bytes = 2 ^ 8 = 256 (we can store 256 different combinations)

// the last counter in the _id using 3 bytes. 
How many numbers we can store in the 3 bytes?

3 bytes = 2 ^ 24 = 16 Million
```

So, if we are using the same machine, same process, and counter. We can generate 16 million documents after which the counter will overflow.
So there is less chance that two ids generate by mongo-DB are the same.

In the SQL database, we can achieve uniqueness in the id by incrementing the last row id.
In the mongo-DB, we cannot do that.

In the Mongo-DB the id generation part depends on the Mongo Driver. The driver is responsible to generate **_id** for each document in the mongo DB.
If we are using multiple instances of MongoDB, the id generation part is centralized and the mongo driver takes care of it.

// Mongoose is the package that works as an abstraction and direct deal with Mongo Driver.
So we can generate unique id using mongoose like this:

```
const id = new mongoose.Types.ObjectId();

// Validate mongoose id:
const isValid = mongoose.Types.ObjectId.isValid(id);
```

