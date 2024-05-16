const express = require('express');
const mongoose = require('mongoose') 
require("dotenv").config();
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());

const port = process.env.PORT 


//routes
const facultyRoute = require('./backend/routes/facultyroute');
const courseRoute = require('./backend/routes/courseroute');
const lectureRoute = require('./backend/routes/lectureroute')
app.use(express.json());



//main page
app.get('/',(req,res)=>{
    return res.status(234).send('Welcome to the mern Project');
})

app.use('/course',courseRoute);
app.use('/faculty',facultyRoute);
app.use('/lecture',lectureRoute); 

mongoose.connect(process.env.MONGODB_URL).then(()=>{app.listen(`${port}`,(()=>{console.log(`DB Connected  at Port : ${port}`);}));}).catch((e)=>{console.log(e);})
