const User = require('../models/userModel');
const Attendance = require('../models/attendanceModel')

exports.getReport = async (req, res, next) => {
    try {
        const { userId } = req.body;

    } catch (error) {
        next(error)
    }
}
