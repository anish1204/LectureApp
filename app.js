const express = require('express');
const mongoose = require('mongoose')
const URL  = 'mongodb://localhost:27017/lecapp';
const app = express();
var cors = require('cors');
app.use(cors());

app.use(express.json());

const router = express.Router();

const facultyRoute = require('./backend/routes/facultyroute');
const courseRoute = require('./backend/routes/courseroute');
const lectureRoute = require('./backend/routes/lectureroute')

app.use(express.json());

//main page
app.get('/',(req,res)=>{
    return res.status(234).send('Welcome to the mern Project')
})

app.use('/course',courseRoute);
app.use('/faculty',facultyRoute);
app.use('/lecture',lectureRoute);


console.log(URL);
mongoose.connect(URL).then(()=>{console.log('Connected to lec app') ;app.listen(5000,(()=>{console.log('Connected2');}));}).catch(()=>{})