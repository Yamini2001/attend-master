const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('./models/userModel');
const routes = require('./routes/userRoutes.js');
const teacherRoutes = require('./routes/teacherRoutes.js')
const app = express();
const PORT = process.env.PORT || 5000;
const mongoString = process.env.DATABASE_URL;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const database = mongoose.connection;
mongoose.connect(process.env.MONGO_DB).then((result)=>
    app.listen(process.env.PORT || 5000, (req,res)=>{
        console.log(`mongo connected, listening on port: ${PORT}`)
    }))
  .catch((err) => console.log(err, 'mongo not connected'));

  database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(morgan('dev'))


app.use(async (req, res, next) => {
    if (req.headers["x-access-token"]) {
     const accessToken = req.headers["x-access-token"];
     const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
     // Check if token has expired
     if (exp < Date.now().valueOf() / 1000) { 
      return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
     } 
     res.locals.loggedInUser = await User.findById(userId); next(); 
    } else { 
     next(); 
    } 
   });
app.use('/', routes);
app.use('/teacher', teacherRoutes); 





