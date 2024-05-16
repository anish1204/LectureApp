const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema ; 

// Creating Faculty for Lectures

const FacultySchema = new Schema ({
    name:{
        type:String,
        requried:true
    },
    fid: {
        type:String,
        requried:true,
        unique:true
      }
})
module.exports = mongoose.model('Faculty',FacultySchema)