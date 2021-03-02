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

const course = new Course({
    name: 'Node.js Course',
    author: 'Mosh',
    tags: ['node', 'backend'],
    isPublished: true
});

