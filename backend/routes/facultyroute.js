const express = require('express');
const router = express.Router();
const Faculty = require('../models/FacultyModel');




// adding teacher data 
router.post('/addteacher', async (req, res) => {
   
    try {
        if (!req.body.name || !req.body.fid) {
            return res.status(500).send("Facing data incomplete issues")
        }

        const newFaculty = {
            name: req.body.name,
            fid: req.body.fid
        }
        try {
            const currentUser = await Faculty.findOne({
                name: req.body.name,
                fid: req.body.fid
            })
            if (!currentUser) {
                const NF = await Faculty.create(newFaculty);
                return res.status(200).send(NF).then(() => console.log('Function added'));
            }
            else
            {
                return res.status(500).send({message:"Current Faculty is already present"})
            }
        }
        catch (e) {

        }

    }
    catch (e) {
        console.log(e);
        return res.status(500);
    }
})

module.exports = router;
