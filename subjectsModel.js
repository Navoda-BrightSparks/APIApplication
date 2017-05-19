'use strict'

const mongoose=require('mongoose');
const Schema=mongoose.Schema;
var subjectSchema=new Schema({

    subName:{

        type:String
    },
    creditPoints:{

        type:number
    }

})
const subjectModel=mongoose.model('subjectModel',subjectSchema);
module.exports=subjectModel;