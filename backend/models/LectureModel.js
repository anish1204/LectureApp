const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

//Schema for all Lectures to be Schedule

const LectureSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    faculty:{
        type:String,
        required:true,
    },
    fid:{
        type:String,
        required:false,
    },
    date:{
        type:Date,
        required:false,
    },
    level:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    img:{
        data:Buffer,
      contentType:String
    }
})

module.exports = mongoose.model('Lecture',LectureSchema);

