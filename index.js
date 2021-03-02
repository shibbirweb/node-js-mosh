const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB...'))
.catch(error => console.log('Could not connect to MongoDB...', error));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// Class, objects
// Course, nodeCourse

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses(){
    const courses = await Course
    .find({
        author: 'Mosh',
        isPublished: true
    })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1});

    console.log(courses);
}

getCourses();
