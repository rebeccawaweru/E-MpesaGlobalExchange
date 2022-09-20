import React,{useState} from 'react'
import {Box,Typography,Alert,Button} from '@mui/material'
import { CustomTextField } from '../Components'
import client from '../api/client'
const ForgotPassword = ()=>{
    const [email,setEmail] = React.useState('');
    const [message,setMessage] = useState('')
    const handleSubmit = async()=>{
        try {
            const response = await client.post('/globalauth/reset',{
                email:email
               })
               if(response.data){
                setMessage("check your email")
               }  
        } catch (error) {
            console.log(error.message)
        }
   
    }

return(
    <Box sx={{height:"100vh", width:"100%", position:"relative",justifyContent:"center", alignItems:"center" ,textAlign:"center"}}  className="bg">
    <Box sx={{ position:"absolute",margin:"auto",boxShadow:24, height:{
        xs:"60vh",
        sm:"60vh",
        lg:"50vh",
        md:"50vh",
    }, width:{
        xs:"50%",
        sm:"50%",
        lg:"40%",
        md:"40%"
    }, top:"20%",left:"30%",}}>
    <Box sx={{width:{
            lg:"30%",
            md:"30%",
            xs:"100%",
            sm:"100%"
        },mx:{
            lg:20,
            md:20,
            sm:2,
            md:2
        },mb:2}}>
        {message && <Alert severity="success">{message}</Alert> }
       </Box>
    <Typography component="h5" variant="h5" sx={{mb:5,mt:5}}>Reset Password</Typography>
        <CustomTextField  label="Enter email to send reset link" value={email} handleChange={(e)=>setEmail(e.target.value)} />
        <Box>
        <Button variant="contained" onClick={handleSubmit} sx={{color:"white",mx:1}}>Send Reset Link</Button>
        </Box>
       
    </Box>
    </Box>
)
}

export default ForgotPassword;