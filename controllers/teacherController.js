const User = require('../models/userModel');
const Attendance = require('../models/attendanceModel')
const Class = require('../models/classModel')

exports.getClass = async (req, res, next) => {
    try {
        const {courseCode} = req.body;
        const currClass = await Class.findOne({courseCode : courseCode})
        const studentArray = currClass.studentIds;
        console.log(studentArray)
        res.send(studentArray)
    } catch (error) {
        next(error)
    }
}


exports.putAttendance = async (req, res, next) => {
    try {
        let { courseCode,dat,attend } = req.body;
        const currClass =await Class.findOne({courseCode : courseCode});
        const studentArray = currClass.studentIds;
        for(let i=0;i<studentArray.length;i++){
            const tempobject = {
                courseCode:courseCode,
                studentId: studentArray[i],
                date:dat,
                attendance:attend[i]
            }
            const AttendTemp = new Attendance(tempobject);
            await AttendTemp.save()
        }
        res.send("attendance submitted")
        /* studentArray.forEach(async roll => {
            const tempobject = {
                courseCode:courseCode,
                studentId: roll,
                date:dat,
                attendance:attend
            }
            const AttendTemp = new Attendance(tempobject);
            await AttendTemp.save()
            res.json({
                data: AttendTemp
               })
            
        }); */
    } catch (error) {
        next(error)
    }
}