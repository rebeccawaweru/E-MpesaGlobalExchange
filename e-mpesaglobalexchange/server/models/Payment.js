const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const paymentSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true, 'Please provide name value'],
    trim:true
  },
  phone:{
    type:Number,
    required:[true, 'Please provide phone number'],
    trim:true
  },
  email:{
    type:String,
    required:[true, 'Please provide name value'],
    trim:true
  },
  craccount:{
    type:String,
    required:[true, 'Please provide name value'],
    trim:true
  },
  transactioncode:{
    type:String,
  },
  amount:{
    type:Number,

  },
  invoicenumber:{
    type:String,
  },
  orderId:{
    type:String,
  },
 channel:{
    type:String,
  }
})


module.exports = mongoose.model('Payment', paymentSchema)
