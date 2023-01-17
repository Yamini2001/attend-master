const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String
    },
    courseName: {
        tye: String
    },
    assignedTeacherId:{
        type: String
    },
    program: {
        type: String,
    },
    whichYear: {
        type: Number
    }

    
})

const Course = mongoose.model('course', courseSchema)


module.exports = Course;