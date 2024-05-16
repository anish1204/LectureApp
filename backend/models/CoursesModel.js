const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

// Courses Schema


const CoursesSchema = new Schema({
    name:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Courses',CoursesSchema);

