'use strict'

//call the packages we need

var express=require('express');//call express
var app=express();//define our app using express
var bodyParser=require('body-parser');
var studentRoute=require('./StudentRoute');//requie our routes

//configure app to use bodyParser
//this will let us get the data from a POST

app.use(bodyParser.json());

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
