'use strict'
const express = require('express');
const mongoose = require('mongoose');
//requiring models to work with mongodb
const studentModel = mongoose.model('studentModel'),
    subjectModel = mongoose.model('subjectModel');
//routes for our API
const Router = express.Router();
//get all students
Router.get('/', (req, res) => {
    //find by studentID
if(req.query.StudentID){

   studentModel.find({StudentID:req.query.hin}).populate('subjects').exec().then(student=>{

       res.json(student||{});
   }).catch(err=>{

       res.sendStatus(500);
   })


}
  else{
    studentModel.find().populate('subjects').exec().then(students => {
    res.json(students)

    }).catch(err=>{
        res.sendStatus(500);
        console.log(err);

    })}
})
//create new student
Router.post('/',(req,res)=>{
  var student=new studentModel(req.body);
  var date=new Date();
  var id=date.getTime();
  student.StudentID=id;
  student.save().then(student=>{

      res.json(student);

  }).catch(err=>{
      res.sendStatus(500);

  })})
    //find student by objectID
    Router.get('/:id',(req,res)=>{
    studentModel.findById(req.param.id).populate('subjects').exec().then(student=>{


        res.json(student);
    })


    })

    Router.put('/:id',(req,res)=>{
studentModel.findById(req.param.id,req.body,function (err,response) {
    if(err){


    }

}

)




    })



//export this routes to use in application
module.exports = Router;