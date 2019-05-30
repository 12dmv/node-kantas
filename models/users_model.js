
const mongoose = require('mongoose');

//creating schemas
const Users = new mongoose.Schema({
    // mongoose validator
    FirstName:{type : String, required : true, maxlength:50},
    LastName:{type : String, required : true, maxlength:50},
    Email:{type : String, unique : true, required:true, minlength:8, maxlength:200},
    UserName:{type : String, unique : true, required:true, minlength:6, maxlength:15},
    Password:{type : String, required:true, minlength:8, maxlength:500},
    ConfirmPassword:{type : String, required:true, minlength:8, maxlength:25},
    Gender:{type:String, maxlength:6, required:true},
    UserType:{type:String},
    UserCode:{type:String},
    Languages:{type:String},
    Contact:{type:Number, minlength:10, maxlength:12},
    DOB:String,
    Address:[{}],
    ProfilePic:{ data: Buffer, contentType: String },
    CreatedAt:{type:Date, default:Date.now}, //this will set current date 
    isActive:Boolean
    });




    //creating monggose model
  
    
    module.exports = mongoose.model('Users', Users);