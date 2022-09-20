const mongoose = require('mongoose')

const transferSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true, 'Please provide name value'],
    trim:true
  },
 mpesanumber:{
    type:Number,
    trim:true
  },
  email:{
    type:String,
    required:[true, 'Please provide name value'],
    trim:true
  },
 mode:{
    type:String,
    required:[true, 'Please provide name value'],
    trim:true 
 },
 bankname:{
    type:String,
 }, 
 bankaccount:{
    type:Number,
 },
 accounttype:{
    type:String
 }
});


module.exports = mongoose.model('Transfers', transferSchema)
