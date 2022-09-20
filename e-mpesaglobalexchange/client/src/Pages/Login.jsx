import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Box, Stack,Alert, Grid, Typography,Button,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel} from '@mui/material'
import {CustomTextField,CustomPassword,HomeScreenPrompt} from '../Components'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import client from '../api/client'
import jwt_decode from "jwt-decode"
import {ke,tz,ug,gha,sa,nigeria,whatsapp,empesa} from '../assets'

function Login() {
    const history = useNavigate();
    const [error,setError] = useState('')
    const [prompt, promptToInstall] = HomeScreenPrompt();
    const [isVisible, setVisibleState] = React.useState(false);
    const currentYear = new Date().getFullYear();
    const [values,setValues] = useState({
      email:'',
      password:'',
  
    })
    const {email,password} = values;
    const [country,setCountry] = useState('')
    const handleChange = e =>{
    const {name,value} = e.target
    setValues({...values,[name]:value})
    }

    const handleSubmit = async()=>{
    
        try {
          if(!country){
            setError("Kindly pick your country")
           }else if(!values){
            setError("Kindly input the missing fields")
           }else{
            const response = await client.post('/globalauth/login',{
              ...values
           })  
      if(response){
       const token = response.data.token
       const user = jwt_decode(token)
       localStorage.setItem('country', country)
       localStorage.setItem('ID', user.id)
       console.log(user.id)
       history('/user'+user.id)
      }
           }
     
        } catch (error) {
          console.log(error.message)  
        }
    }
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }

    React.useEffect(
      () => {
        if (prompt) {
          setVisibleState(true);

        }
      },
      [prompt]
  );
    return (
    <Box sx={{width:"100%",height:"120vh",justifyContent:"center",alignItems:"center",textAlign:"center",position:"relative",background:"linear-gradient(315deg, #734ae8 0%, #89d4cf 74%)"}}>
      <div id="google_translate_element" style={{display:"flex",float:"right",height:"8vh"}}>
    <Button sx={{mt:2,mr:2}} variant='outlined' onClick={googleTranslateElementInit}>Translate</Button>
    </div>

       <Button sx={{mt:1}} variant='outlined' onClick={promptToInstall}>Add to Homescreen</Button>
    <Grid container  sx={{boxShadow:5,width:"60%",mb:3, height:{
      lg:"100vh",
      md:"100vh",
      sm:"96vh",
      xs:"96vh"
    }, display:"block",mt:{
      lg:2,
      md:2,
      sx:1,
      xs:1
    },pt:{
      lg:4,
      md:4,
      sm:1,
      xs:1
    },mx:{
        lg:38,
        md:15,
        xs:10,
        sm:10
    }}}>
        <Box sx={{mb:2}}>
        <Box component="img" src={empesa} sx={{width:"25%", height:90}}/>
        </Box>
       <Box sx={{justifyContent:"center",alignItems:"center",textAlign:"center",}}>
 
        {error && <Alert color='error'>{error}</Alert>}
        <b><i>Choose country</i></b>
        <Stack direction="row" spacing={1} sx={{mb:1,mt:1,justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <input type="radio" value="KES" onChange={(e)=>setCountry(e.target.value)} />
            <img src={ke} alt="" style={{width:"15px",height:"15px"}}/>KE
            <input type="radio" value="UGX" onChange={(e)=>setCountry(e.target.value)} />
            <img src={ug} alt="" style={{width:"15px",height:"15px"}}/>UG
            </Stack>

            <Stack direction="row" spacing={1} sx={{mb:1,justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <input type="radio" value="TZS" onChange={(e)=>setCountry(e.target.value)} />
            <img src={tz} alt="" style={{width:"15px",height:"15px"}}/>Tz
            <input type="radio" value="GHS" onChange={(e)=>setCountry(e.target.value)} />
            <img src={gha} alt="" style={{width:"15px",height:"15px"}}/>GH
            </Stack>

          <Stack direction="row" spacing={1} sx={{mb:2,justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <input type="radio" value="ZAR" onChange={(e)=>setCountry(e.target.value)} />
            <img src={sa} alt="" style={{width:"15px",height:"15px"}}/>SA
            <input type="radio" value="NGN" onChange={(e)=>setCountry(e.target.value)} />
            <img src={nigeria} alt="" style={{width:"15px",height:"15px"}}/>NG
            </Stack>

        </Box>

          <Box>
        <CustomTextField
        name="email"
        value={values.email}
        handleChange={handleChange}
         placeholder="email" label="Email" icon={<EmailIcon/>}/>
        </Box>
        <Box>
         <CustomPassword name="password" password={values.password} handleChange={handleChange} label="Password"/>
        </Box>

        <Box sx={{mb:1}}>
        <Link to='/forgotpassword'>Forgot Password?</Link>
        </Box>
   
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <Button variant="contained" color="warning" sx={{mx:2}} onClick={handleSubmit}>Sign In</Button>
        <Button variant="contained" color="warning" sx={{mx:2}} onClick={()=>history('/signup')}>Sign Up</Button>
        {/* <Link to='/signup' style={{textDecoration:"none", fontSize:"large",fontWeight:"bolder"}}>Sign Up</Link> */}
        </Box>
        <Box sx={{mt:2,display:{
          lg:"flex",
          md:"flex",
          xs:"block",
          sm:"block"
        },justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <b>If you have any problem contact us on +254789333444 </b>
        <Typography><b>or</b></Typography>
        <WhatsAppIcon color="success" fontSize='medium'/>
        <a href="https://api.whatsapp.com/send?phone=0789333444" style={{textDecoration:"none"}}><b>WhatsApp Us</b></a>
        </Box>
        
        <Box sx={{justifyContent:"center",alignItems:"center",textAlign:"center", mt:{
          lg:3,
          md:3,
          xs:1,
          sm:1
        }}}>
        <Link to='/adminlogin' style={{textDecoration:"none", fontSize:"large",fontWeight:"bolder"}}>Admin</Link>
        </Box>
        

    </Grid>
    <Box sx={{position:"absolute",bottom:0,textAlign:"center",justifyContent:"center",alignItems:"center",left:{
      lg:"35%",
      md:"35%",
      xs:"8%",
      sm:"8%"
    }}}>
    <Typography sx={{textAlign:"center",}}>Copyright © {currentYear} E-Mpesa Global Exchange</Typography>
    </Box>
    </Box>
    );
}

export default Login;