'use strict'
const express =require('express');
const mongoose=require('mongoose');
//requiring models to work with mongodb
const studentModel=mongoose.model('studentModel'),
    subjectModel=mongoose.model('subjectModel');
//routes for our API
const Router=express.Router();
//test route to makesure everithing is working
Router.get('/',(req,res)=>{

    res.json({message:'welcome to the API'});

})
//more routes for our api will happen here
//export this routes to use in server
module.exports=Router;