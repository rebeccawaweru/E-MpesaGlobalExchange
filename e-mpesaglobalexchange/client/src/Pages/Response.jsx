import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Box, Typography,Alert } from '@mui/material';
import { useLocation, useSearchParams } from 'react-router-dom'
import client from '../api/client';
import { CustomSideBar } from '../Components';
export default function Response(){
  const [searchParams, setSearchParams] = useSearchParams();
    //  aei7p7yrx4ae34 
    const id = searchParams.get("id") //order id
    const ivm = searchParams.get("ivm") //invoice number
    const mc = searchParams.get("mc")//amount
    const p3 = searchParams.get("p3")//craccount
    const p1 = searchParams.get("p1")//email
    const p2 = searchParams.get("p4")//username
    const txncd = searchParams.get("txncd")//transaction code
    const msisdn_id = searchParams.get("msisdn_id") //name of payer
    const msisdn_idnum = searchParams.get("msisdn_idnum") //phone no.
    const channel = searchParams.get("channel")
    const cbk = searchParams.get("status")
    const [success,setSuccess] = useState('')
    async function Pay(){
      await client.post('/payment/newpayment',{
        name:msisdn_id,
        phone:msisdn_idnum,
        email:p1,
        craccount:p3,
        username:p2,
        transactioncode:txncd,
        amount:mc,
        invoicenumber:ivm,
        orderId:id,
        channel:channel
      }).then((response)=>{
         console.log(response.data)
      })
    }
    useEffect(()=>{
     if(cbk === "aei7p7yrx4ae34"){
        setSuccess("Payment Successful")
        Pay()
     }
    },[])
return(
  <Box sx={{width:"100%", height:"100%",justifyContent:"center",alignItems:'center',textAlign:"center",pt:5 }}>

    {success && <Typography><b>{success}</b></Typography>}
    <Typography><i>Thank you for your payment. Kindly check your email for a receipt</i></Typography><br></br>
    <a href='https://forextradingacademy.co.ke'>Home</a>
  </Box>
)
}