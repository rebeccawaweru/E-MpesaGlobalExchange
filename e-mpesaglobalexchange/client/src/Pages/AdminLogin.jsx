import * as React from 'react';
import { Box,Modal,Typography,Button,Alert} from "@mui/material"
import { CustomTextField } from "../Components";
import { useNavigate } from 'react-router-dom';
import client from '../api/client';
import axios from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function AdminLogin(){
    const [open, setOpen] = React.useState(true);
    const [password,setPassword] = React.useState('')
    const [error,setError] = React.useState('')
    const history = useNavigate()
    const handleSubmit =async()=>{
       if(!password){
            setError("Kindly enter password")
        }
        if(password === "123456"){
          history(`/admin`)
        }
        // try {
        //   const response = await axios.post('http://localhost:5000/globalauth/adminlogin',{
        //     email:"calvinkirochi254@gmail.com",
        //     password:password
        //    })
        //    if(response.data.success){
        //     history(`/admin/${response.data.id}`)
        // }
        // } catch (error) {
        //   if(error.message === "Request failed with status code 401"){
        //     setError('Invalid password')
        //   }else if(error.message === "Request failed with status code 500" || error.message === "Network Error" ){
        //     setError('An error occurred. Kindly check your internet connection')
        //   }
        // }
    }
    return(
        <Box>
        <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Admin Login
          </Typography>
          {error && <Alert color='error'>{error}</Alert>}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <CustomTextField placeholder="enter password" value={password} handleChange={(e)=>setPassword(e.target.value)} /><br></br>
            <Button variant="contained" onClick={handleSubmit}>Ok</Button>
          </Typography>
        </Box>
      </Modal>
        </Box>
    )
}