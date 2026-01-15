// taskRoutes
// post task
const Task=require('../model/taskModel')
const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')
const { findOneAndUpdate } = require('../model/userModel')

router.post('/addtask',auth,async(req,res)=>{
    console.log(req.user)
    try{        
            const { priority} = req.body;
            if (!['High', 'Low'].includes(priority)) {
                return res.status(400).send({ message: "Only 'high' and 'low' are allowed." });
            }
            const task = new Task({ 
                ...req.body,
                owner:req.user._id
            });
                await task.save();
                res.status(200).send(task);
        } 
        catch (e) {
            
            res.status(500).send({ message: e });
        }
})
// get task

router.get('/tasks',auth, async(req,res)=>{
    try{
        const getUser=await req.user.populate('taskRel')
        if(getUser){      
            console.log("User",getUser) 
            res.status(200).send(req.user.taskRel)
    }
    } catch(e){
           return res.status(500).send({"message":"Task Not Available"})
    }
})
// :id>> taskid 
// router >> taskid +ownerid

// getTaskByID:
router.get('/task/:id',auth,async(req,res)=>{
const getTaskById=await Task.findOne({_id:req.params.id,owner:req.user._id})
    res.send(getTaskById)
})

// update
    // findOneAndUpdate()
router.put('/task/:id',auth,async(req,res)=>{

const updateTask=await Task.findOneAndUpdate({_id:req.params.id,owner:req.user._id},req.body,{new:true,runValidators:true})
res.send(updateTask)
})

// delete 
router.delete('/task/:id',auth,async(req,res)=>{

    const DeleteTask=await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
    res.send({
        message:"Task Deleted Successfully",
        DeleteTask
    })
    })

module.exports=router

// {    
//     "email":"John12@gmail.com",
//     "password":"John12@gmail.com"
// }

// NAother user:
// {
//     "email":"Chris12@gmail.com",
//     "password":"Chris12@gmail.com"
// }

// render.com >> deployment >>