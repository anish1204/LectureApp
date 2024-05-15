const express = require('express');
const router = express.Router();

const Lecture = require('../models/LectureModel')
const Course = require('../models/CoursesModel');
const Faculty = require('../models/FacultyModel');


router.post('/addlecture',async(req,res)=>{
    try{
        if(!req.body.course_name)
            {
                return res.status(400).send({message:"Enter Course name"})
            }
        const newLecture = {
            name:req.body.course_name,
            faculty : req.body.faculty,
            fid:req.body.fid,
            date : req.body.date,
            level: req.body.level,
            description: req.body.description
        };
        try{
            const user = await Lecture.findOne({
                fid: req.body.fid,
                date:req.body.date
            }); 
            const c_name = await Course.findOne({
                name:req.body.course_name
            })
            if (user) {
                
                return res.status(500).send({ message: "Faculty already has a lecture on that day" });
            }
            else if(!c_name)
                {
                    return res.status(500).send({
                        "message":"No Such Course present"
                    })
                }
            else {
                
                const nLecture = await Lecture.create(newLecture);
                return res.status(200).send(nLecture);
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
    catch(error)
    {
        console.log(error);
    }
})





module.exports = router;
