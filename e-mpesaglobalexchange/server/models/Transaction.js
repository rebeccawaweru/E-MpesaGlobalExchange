const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const transactionSchema = mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
phone:{
    type:Number,
    required:true,
},
mpesanumber:{
        type:Number,
        trim:true
 },
bankname:{
    type:String,
    trim:true
},
accountnumber:{
    type:Number,
  },
branch:{
    type:String,
},
method:{
    type:String,
    required:true,
},
accounttype:{
    type:String
},
accounttypenumber:{
    type:String
}
})


module.exports = mongoose.model('Transaction', transactionSchema)
