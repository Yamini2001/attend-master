const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    userName: {
        type: String,
        requierd: true
    },
    userEmail:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true
    },
    admissionYear:{
        type: Number,
    },
    program:{
        type: String,
    },
    imagePath: {
        type: String
    },
    contactNumber: {
        type: String
    },
    dob: {
        type: String,
    },
    role: {
        type: String,
        default: 'student',
        enum: ["student", "admin", "teacher", "hod"]
    },
    accessToken: {
        type: String
    },
    
})

const User = mongoose.model('user', userSchema)

module.exports = User;