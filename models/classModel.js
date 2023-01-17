const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    courseCode: {
        type: String
    },
    teacherId:{
        type: String
    },
    currentYear:{
        type:Number
    },
    studentIds:{
        type: Array,
    }

    
})

const Class = mongoose.model('Class', classSchema)


module.exports = Class;