const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true, 'Please provide name value'],
    trim:true
  },
  email:{
    type:String,
    required:[true, 'Please provide email'],
    trim:true
  },
  phone:{
    type:Number,
    required:[true, 'Please provide phone number'],
    trim:true
  },
  password:{
    type:String,
    required:[true, 'Please provide password'],
    minlength:6
  },
  avatar:{
    type:String,
    default:"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
  },  
  resetToken:{
  type:String, 
  },
  expireToken:{
    type:String,
   },
   craccount:{
    type:String
   },
   idNumber:{
    type:Number
   },
   bankname:{
    type:String,
   },
   banknumber:{
    type:Number
   },
   referralLink:{
    type:String,
    default:""
   }

})
userSchema.methods.comparePassword = async function(candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('User', userSchema)
