import * as React from 'react';
import { Box,Modal,Typography,Button,Alert} from "@mui/material"
import { CustomTextField } from "../Components";
import { useNavigate } from 'react-router-dom';
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

export default function AdminReset(){
    const [open, setOpen] = React.useState(true);
    const [email,setEmail] = React.useState('')
    const [error,setError] = React.useState('')
    const [message,setMessage]= React.useState('')

    const handleSubmit = ()=>{
       if(!email){
        setError('Kindly enter the required email')
       }
       const handleChange = async () =>{
        const response = await axios.post('https://e-mpesaglobalexchange.com/globalauth/adminreset',{
          email:email
         })
         if(response.data){
          setMessage("check your email")
         }
      }
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
        Enter Email 
          </Typography>
          {error && <Alert color='error'>{error}</Alert>}
          {message && <Alert color='success'>{message}</Alert>}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <CustomTextField label="Email" placeholder="email" value={email} handleChange={(e)=>setEmail(e.target.value)} /><br></br>
            <Button variant="contained" onClick={handleSubmit}>Ok</Button>
          </Typography>
        </Box>
      </Modal>
        </Box>
    )
}