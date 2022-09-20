const Payment = require('../models/Payment')

const newpayment = async(req,res)=>{
 const {name,phone,email,craccount,username,transactioncode,amount,invoicenumber,orderId,channel} = req.body;
 const payment = await Payment.create({name,phone,email,craccount,username,transactioncode,amount,invoicenumber,orderId,channel});
 res.status(200).json({success:true, payment})
}

const getpayments = async(req,res)=>{
const payments = await Payment.find({})
res.status(200).json({success:true, payments})
}

module.exports = {newpayment, getpayments}