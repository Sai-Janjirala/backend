const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


async function registerUser(req,res){
  const {username,email,password} = req.body;

  const existingUser = await userModel.findOne({email})

  if(existingUser){
    return res.status(400).json({
      message: "User with this email already exists"
    })
  }

  const user = await userModel.create({
    username,
    email,
    password
  })


  const token = jwt.sign(
    {id: user._id},
     'fa3467fa068d1de7196e3e302d4d82a3') 

     res.cookie('token', token)

  res.status(201).json({
    message: "User registered successfully",
    
    user: user,
    
  })
}

module.exports = {registerUser};