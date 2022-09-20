const Transaction = require('../models/Transaction');

const newTransaction = async(req,res)=>{
    const {name,email,phone,mpesanumber,bankname,accountnumber,branch,method,accounttype,accounttypenumber} = req.body;
    const transaction = await Transaction.create({name,email,phone,mpesanumber,bankname,accountnumber,branch,method,accounttype,accounttypenumber})
    if(!transaction){
        res.status(500).json("Error occurred!")
    }
    res.status(200).json({success:true, transaction})
}

const getTransaction = async(req,res)=>{
    const transaction = await Transaction.find({})
    res.status(200).json({success:true, transaction})
}

module.exports = {newTransaction,getTransaction}