const express = require('express');

const router = express.Router();

const Lecture = require('../models/LectureModel')
const Course = require('../models/CoursesModel');
const Faculty = require('../models/FacultyModel');


// get all courses
router.get('/courses',async(req,res)=>{
    try{
        const course_name = (req.body.name);
        
        const Data = await Course.find({});
        return res.status(200).send({"message":"Done",Data}) 
    }
    catch(error)
    {
        console.log(error);
    }
})
 

//adding course to the main page
router.post('/addcourse', async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).send({ message: "Error" })
        }
        const newCourse = {
            name: req.body.name
        }

        try {
            const NewCourse = await Course.create(newCourse);
            return res.status(200).send(NewCourse);
        }
        catch (e) {
            console.log(e);
        }

    }
    catch (e) {
        console.log(e);
    }
})
// getting all lectures from a particular course 
router.get('/getlectures/:id',async(req,res)=>{
    try{
         const course_name = parseInt(req.params.id)
         console.log(req.params.id);
        
        console.log('Hi');
        const Data = await Lecture.find({
            name:req.params.id
        })
        res.status(200).send({"message":"Data Recieved",Data})
    }
    catch(e){
        console.log(e);
    }
})

module.exports = router;