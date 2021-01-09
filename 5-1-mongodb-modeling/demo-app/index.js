const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/modeling-demo', {useNewUrlParser: true, useUnifiedTopology: true})
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
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
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
    const courseCreate = new Course({
        name: "NodeJS",
        author: authorID
    });
    const courseDoc = await courseCreate.save();
    console.log(courseDoc);
}

// createAuthor()
// createCourse('5fe2478b941d861398d7dcee')

// Population to get reference documents

async function listCourses(){
    const courses = await Course
    .find()
    .populate('author', 'name bio website -_id')
    .select('name author')
    console.log(courses);
}

listCourses();