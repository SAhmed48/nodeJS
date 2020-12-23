const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/embedded-doc', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(res => console.log('Connected to db'))
        .catch(err => console.error(err));

const AuthorSchema = new Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', AuthorSchema);

const CourseSchema = new Schema({
    name: String,
    author: AuthorSchema
});

const Course = mongoose.model('Course', CourseSchema);

async function createAuthor(){
    const authorCreate = new Author({
        name: "Salman Ahmed",
        bio: 'xyz',
        website: '.com.au'
    });
    const authorDoc = await authorCreate.save();
    console.log(authorDoc);
}

async function createCourse(authorID){
    const author = new Author({ name: 'Salman Ahmed' });

    const courseCreate = new Course({
        name: "NodeJS",
        author
    });
    const courseDoc = await courseCreate.save();
    console.log(courseDoc);
}

async function listCourses(){
    const courses = await Course
    .find()
    .populate('author', 'name bio website -_id')
    .select('name author')
    console.log(courses);
}

// createAuthor()
createCourse();

// Population to get reference documents
// listCourses();