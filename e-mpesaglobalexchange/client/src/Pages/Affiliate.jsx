import React,{useState,useEffect} from 'react'
import {Box,Typography} from '@mui/material'
import { CustomTextField } from '../Components'
import client from '../api/client'
export default function Affiliate(){
    const id = localStorage.getItem('ID')
    const [data,setData] = useState({
        referralLink:""
    })
    async function getUser(){
        await client.get('/globalauth/getuser/'+id).then((response)=>setData(
            response.data.user
        ))
    }
    useEffect(()=>{    
       getUser()
    },[])
    return(
        <Box sx={{p:4}}>
        <Typography><i>Share your E-mpesa Global Exchange referral link</i></Typography>
        <CustomTextField fullWidth value={data.referralLink}/>
        <Typography><i>You can get discounts on products at Forex Trading Academy</i></Typography>
        <i>1.Go register/login</i><br></br><br></br>
        <i>2.Access your user dashboard and click on referrals</i><br></br><br></br>
        <i>3.Share your referral link to your friends</i><br></br><br></br>
        <i>4.Once your referral link is used to enroll for a course , you get upto 10% discount on our courses</i><br></br><br></br>
       <b><a href='https://forextradingacademy.co.ke'>https://forextradingacademy.co.ke</a></b> 
        </Box>
    )
}