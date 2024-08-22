const mongoose=require('mongoose');

mongoose.connect("");

const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String 
})
const User=mongoose.model('users',UserSchema)
const user=new User({
    name:"Bby",
    email:"gg@gmail.com",
    password:"fgusnhs"
})

user.save();