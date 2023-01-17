const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController.js');
const Class = require('../models/classModel')

router.post('/attendance', teacherController.putAttendance)

router.get('/class',teacherController.getClass)

router.post('/class', (req,res)=>{
    const {courseCode , teacherId, currentYear, studentIds} = req.body;
    const tempobject = {
        courseCode: courseCode,
        teacherId: teacherId,
        currentYear: currentYear,
        studentIds: studentIds
    }
    const classs = new Class(tempobject)
    classs.save().then(()=>{
        res.json(
            {data:classs}
        )
    });
})

 
module.exports = router;