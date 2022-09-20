import React,{useState,useEffect} from 'react'
import {Box, Typography,Button} from '@mui/material';
import {CustomSideBar,Forex,CustomTextField} from '../Components';
import {ke,ug,tz,gha,sa,nigeria,whatsapp2,phone,email} from '../assets'

export default function Chat(){
    const [country,setCountry] = useState('')
    function getCountry(){
        if(localStorage.getItem('country') === 'kenya'){
          setCountry(ke)
       
        }else if(localStorage.getItem('country') === 'uganda'){
          setCountry(ug)
        }else if(localStorage.getItem('country') === 'tanzania'){
           setCountry(tz)
        }else if(localStorage.getItem('country') === 'ghana'){
            setCountry(gha)
        }else if(localStorage.getItem('country') === 'southafrica'){
            setCountry(sa)
        }else if(localStorage.getItem('country') === 'nigeria'){
            setCountry(nigeria)
        }
        }
    useEffect(()=>{
        getCountry()
    },[])
 return(
    <Box sx={{width:"80%",backgroundColor:"whitesmoke",color:"black",pt:5,pl:5}}>
      <Typography><i><b>Contact us</b></i></Typography>

      <Box sx={{display:"flex", mb:2,mt:5}}>
      <Box component="img" src={phone} sx={{width:50,height:50,mt:-2}}/>
      <b>Call us: +254 789 333 444</b>
      </Box>
      
      <Box sx={{display:"flex",mb:2}}>
      <Box component="img" src={whatsapp2} sx={{width:50,height:50,mt:-1}}/>
      <a href="https://api.whatsapp.com/send?phone=0789333444" style={{textDecoration:"none"}}><b>WhatsApp Us</b></a>
      </Box>

      <Box sx={{display:"flex",mt:1,mb:2}}>
      <Box component="img" src={email} sx={{width:50,height:50,mt:-1}}/>
       <b>Email Us: cfo@e-mpesaglobal.com</b>
      </Box>
    </Box>
  
 )
}