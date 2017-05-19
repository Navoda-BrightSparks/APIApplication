'use strict'

//call the packages we need

var express=require('express');//call express
var app=express();//define our app using express
var bodyParser=require('body-parser');
var mongoose=require('mongoose');//require mongoose to interact with mongodb
var studentRoute=require('./StudentRoute');//requie our routes

mongoose.promise=global.promise;
//configuring model files
var studentModel=require('./studentModel');
var subjectModel=require('./subjectsModel');

//configure app to use bodyParser
//this will let us get the data from a POST

app.use(bodyParser.json());

//create mongodb database and connecting to it
mongoose.connect('mongodb://localhost:27017/Student',err=>{
    if(err){
        console.log(err);
        process.exit(1);

    }

});

//register our routes
//all our routes will be prefixed with /students
app.use('/students',studentRoute);
//start the server
app.listen(3000,err=>{

   if(err)
   {
       console.log(err);
       return;

   }
   console.log('APIApplication is running and listening to port 3000');

});
