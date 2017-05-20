'use strict'

const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const StudentSchema=new Schema({

    Name:{
        type:String

    },
    StudentID:{
        type:String

    },
    Grade:{
        type:number

    },
    createdDate:
        {
            type:date,
            default:new date()

        },
    //reference to subjects.store array of objectIDS which are allocated to a particular student
    subjects:[{

        type:Schema.Types.ObjectId,
        ref:'Subjects'
    }]


})

const studentModel=mongoose.model('studentModel',StudentSchema);
module.exports=studentModel;

