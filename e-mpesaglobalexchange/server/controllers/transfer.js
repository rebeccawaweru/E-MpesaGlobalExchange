const Transfers = require('../models/Transfers')

const newTransfer = async(req,res)=>{
    const {name,mpesanumber,email, mode,bankname,bankaccount,accounttype} = req.body;
    const transfer = await Transfers.create({name,mpesanumber,email, mode,bankname,bankaccount,accounttype})
    res.status(200).json({success:true, transfer})
}

const getTransfers = async(req,res)=>{
    const transfers = await Transfers.find({});
    res.status(200).json({success:true, transfers})
}

module.exports = {newTransfer,getTransfers}