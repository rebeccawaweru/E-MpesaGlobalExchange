const crypto = require("crypto"); //for generating  the key
const { URLSearchParams } = require("url");
const axios = require('axios')

const ipay = async(req,res,next)=>{
const {email,phone,amount,account,name} = req.body;
    var live ="1";
    var oid = "54674675"; //should be unique
    var inv ="112020102292999";
    var ttl = amount;
    var tel = '254'+phone;
    var eml = email;
    var vid ="tasl";
    var curr = "KES";
    var p1 = email;
    var p2 = name;
    var p3 = account;
    var p4 = "";
    var cbk = "https://e-mpesaglobalexchange.com/cbk"; //call back
    var cst = "1";
    var crl = "2";
    var hashkey ="W3g8EaV8cxc$hfv%z7Vqu$Cz%2*jFJTQ";

    //concatinating data-string
    data =
      live +
      oid +
      inv +
      ttl +
      tel +
      eml +
      vid +
      curr +
      p1 +
      p2 +
      p3 +
      p4 +
      cbk +
      cst +
      crl;

    console.log("dataString", data);
    //generating the key
    var hashstring = crypto
      .createHmac("sha1", hashkey)
      .update(data)
      .digest("hex");
    const param = new URLSearchParams({
      live:"1",
      oid:"54674675",
      inv:"112020102292999",
      ttl:amount,
      tel:'254'+phone,
      eml: email,
      vid:"tasl",
      curr:"KES",
      p1:email,
      p2:name,
      p3:account,
      p4: "",
      cbk: "https://e-mpesaglobalexchange.com/cbk",//call-back
      cst: "1",
      crl: "2",
      hsh: hashstring,
    }).toString();
    const url ="https://payments.ipayafrica.com/v3/ke" + "?" + param; //url generated append params
     //open this url on another tab
        res.send(url);
   
}


const callback = async(req,res)=>{
  // var status = req.query; //this is how you get params
  // console.log(status)
  // res.send("call-back-triggerd and the status is ")
  var status = await req.query; 
  //perform all call back logic check  this on our Doc the 
  
    let url = `http://localhost:3000/cbk?response=${status}`     //this should be client side URL, check the params on client to check the transaction status make sure you have this on React as a route

    res.redirect(url)
  
}

module.exports = {ipay,callback}