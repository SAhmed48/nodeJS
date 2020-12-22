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
