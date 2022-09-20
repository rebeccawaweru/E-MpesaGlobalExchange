const User = require('../models/Users');
const Admin = require('../models/AdminModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const crypto = require("crypto")
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.SENDGRID_API_KEY
    }
}))
const createUser = async(req,res)=>{
    const {name,email,phone,password} = req.body;
    if(!name || !email || !phone || !password){
        res.status(500).json('Kindly enter the missing fields')
    }
    const findUser = await User.findOne({email})
    if(findUser){
        res.status(500).json('Email already exists')
    }else{
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);
        const user = await User.create({name,email,phone,password:hashedpassword})
        res.status(200).json({success:true, user})
    }
}
const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(500).json('Please enter the missing fields')
    }
    const user = await User.findOne({email});
    if(!user){
        res.status(500).json('The email does not exist')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        res.status(401).json('Invalid Credentials')
    }
    const id = user._id;
    const token = jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:"30d",
    })
    res.status(200).json({success:true, token, data:user.name})
}

//get specific user
const getUser = async (req,res) =>{
    const {id:userId} = req.params;
    const user = await User.findById({_id:userId});
    if(!user){
        throw new NotFoundError('User does not exist')
    }
    res.status(200).json({user})
}
const getusers = async(req,res)=>{
    const users = await User.find({})
    res.status(200).json({success:true, users})
}

const updateUser = async(req,res)=>{
    const {id:userId} = req.params
    const user = await User.findByIdAndUpdate({_id:userId},req.body,{
     new:true,
     runValidators:true,
 })
    if(!user){
        throw new CustomAPIError('No user to update')
    }
    res.status(200).json({success:true, user})
}
const resetpassword = async (req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
             res.status(500).json('No user exists with that email')
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000;
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"forexarenakenya@gmail.com",
                    subject:"Password reset",
                    html:
                    `<p>You requested for password reset</p>
                    <h5>click in this <a href="https://e-mpesaglobalexchange.com/confirm/${token}">Link</a> to reset your password</h5>`
                })
                res.status(200).json({message:"check your email"})
            })
        })
    })
}

const newpassword = (req,res) =>{ 
    const {password,sentToken} = req.body;
    User.findOne({resetToken:sentToken, expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try again session expired"})
        }
        bcrypt.hash(password,10).then(hashedpassword=>{
          user.password= hashedpassword;
          user.resetToken = undefined;
          user.expireToken = undefined;
          user.save().then(user=>{
            res.json('Password set')
          })
          .catch(err=>res.status(400).json('Error' +err));
        })
         .catch(err=>res.status (404).json('Error' +err));
})}
//admin
const adminlogin = async(req,res)=>{
    const {email,password} = req.body;
    if( !email || !password){
        throw new BadRequestError('Please provide the required credentials')
    }
    const user = await Admin.findOne({email})
    if(!user){
        throw new UnauthenticatedError('User does not exist')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Incorrect credentials')
    }

    res.status(200).json({success:true,id:user._id})
}

const adminPassword = async(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
      Admin.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
             res.status(500).json('No user exists with that email')
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000;
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"forexarenakenya@gmail.com",
                    subject:"Password reset",
                    html:
                    `<p>You requested for password reset</p>
                    <h5>click in this <a href="https://e-mpesaglobalexchange.com/confirm2/${token}">Link</a> to reset your password</h5>`
                })
                res.status(200).json({message:"check your email"})
            })
        })
    })
}

//admin
const newpassword2 = async (req,res) =>{ 
    const {password,sentToken} = req.body;
   await Admin.findOne({resetToken:sentToken})
    .then(user=>{
        if(!user){
            return res.status(500).json({error:"Try again session expired"})
        }
        bcrypt.hash(password,10).then(hashedpassword=>{
          user.password= hashedpassword;
          user.resetToken = undefined;
          user.expireToken = undefined;
          user.save().then(user=>{
            res.json('Password set')
          })
          .catch(err=>res.status(400).json('Error' +err));
        })
         .catch(err=>res.status (404).json('Error' +err));
})}





module.exports = {
    adminlogin,
    adminPassword,
    newpassword2,
    createUser,
    login,
    getUser,
    getusers,
    resetpassword,
    newpassword,
    updateUser
}