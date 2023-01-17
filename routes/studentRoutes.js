const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController.js');

router.get('/attendance', StudentController.getReport)

 
module.exports = router;