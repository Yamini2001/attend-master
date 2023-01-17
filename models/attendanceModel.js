const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    date: {
        type:String,
        required:true
    },
    
    attendance: {
        type: Number,
        required: true,
    }

    
})

const Attendance = mongoose.model('attendance', attendanceSchema)


module.exports = Attendance;