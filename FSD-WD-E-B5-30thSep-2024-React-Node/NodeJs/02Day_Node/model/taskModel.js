const mongoose=require('mongoose')
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        trim: true, // Removes unwanted whitespace from my name
        minlength: 3, // Ensures TaskName is at least 3 characters long
    },
    taskDescription: {
        type: String, //something
        required: true,
        trim: true,
    },
    priority: {
        type: String,
        required: true,
        enum: ["Low", "High"], // Allows only these values
        validate(value) {
            const priorityLevels = ["Low", "Medium", "High"];
            if (!priorityLevels.includes(value)) {
                throw new Error("Priority must be one of: Low, Medium, or High");
            }
        },
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,// ObjectId of that user
        required:true,
        ref:"User"//Model Name

    }
});

const Task=mongoose.model('Task',taskSchema)

module.exports=Task