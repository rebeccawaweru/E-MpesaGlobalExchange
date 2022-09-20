import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Box, Grid, Typography,Button} from '@mui/material'
import {CustomTextField,CustomPassword} from '../Components'
import {Formik} from 'formik'
import * as  Yup from 'yup'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import client from '../api/client';
import { empesa } from '../assets';
const regx = /^\d{10}$/;
const validationSchema = Yup.object({
    name : Yup.string().trim().min(5,'invalid name!').required('Full name is required'),
    email: Yup.string().email('Invalid email!').required('Email  is required'),
    phone:Yup.string().matches(regx,'Invalid phonenumber').required('Phone number is required'),
    password:Yup.string().trim().min(6,'password must have 6 or more characters').required('Password is required'),
    confirmPassword:Yup.string().equals([Yup.ref('password'),null],'Passwords do not match!')
    })
function Signup() {
    const history = useNavigate()
    const userInfo = {
        name:'',
        email:'',
        phone:0,
        password:'',
        confirmPassword:''
    }
    const [error, setError] = useState(false);
    const [errormessage,setErrorMessage]= useState('')
    const [success,setSuccess] = useState(false);
    const signUp = async(values)=>{
        try {
          const response = await client.post('/globalauth/newuser',{
            ...values
          })
         if(response.data.success){
            setSuccess(true)
            await client.patch('/globalauth/updateuser/'+response.data.user._id, {
              referralLink:`https://e-mpesaglobalexchange.com/signup/${response.data.user._id}`
             }).then((response)=>{
              setTimeout(()=>{
                history('/')
              },3000)
             })
         }
        } catch (error) {
          setError(true)
         if(error.message === "Request failed with status code 400"){
           setErrorMessage('Kindly input the missing fields')
         }else if (error.message === "Request failed with status code 401"){
         setErrorMessage('Email  already exists') 
        }else if (error.message === "Network Error" || error.message === "Request failed with status code 500"){
       setErrorMessage('Network error. Please check your internet connection')
       }
        }
       }
    return (
    <Box sx={{width:"100%",height:"100vh",justifyContent:"center",alignItems:"center",textAlign:"center",overflow:"hidden",background:"linear-gradient(315deg, #734ae8 0%, #89d4cf 74%)"}}>
        {/* linear-gradient(315deg, #abe9cd 0%, #7ee8fa 74%) */}
    <Grid container  sx={{boxShadow:5,width:"80%", height:{
      lg:"88vh",
      md:"94vh",
      sm:"94vh",
      xs:"94vh"
    }, display:"block",mt:{
      lg:5,
      md:3,
      sx:2,
      xs:2
    },pt:4,mx:{
        lg:20,
        md:15,
        xs:4,
        sm:4
    }}}>
        <Formik 
        initialValues={userInfo} 
        validationSchema={validationSchema} 
        onSubmit={signUp}>
        {(
        {values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit})=>{
        const{name,email,phone,password,confirmPassword}= values;
        return(
        <>
        <Box sx={{mb:2}}>
        <Box component="img" src={empesa} sx={{width:"25%", height:90}}/>
        </Box>
        <Box>
        <CustomTextField
         name="name"
         value={name}
         handleChange={handleChange('name')} 
         error={touched.name && errors.name}
         placeholder="name" label="Name" icon={<AccountCircle/>}/>
        </Box>
        <Box>
        <CustomTextField
        name="email"
        value={email}
        handleChange={handleChange('email')} 
        error={touched.email && errors.email}
         placeholder="email" label="Email" icon={<EmailIcon/>}/>
        </Box>
        <Box>
        <CustomTextField 
        name="phone"
        value={phone}
        handleChange={handleChange('phone')} 
        error={touched.phone && errors.phone}
        placeholder="phone" label="Phone" icon={<LocalPhoneIcon/>}/>
        </Box>
        <Box>
         <CustomPassword
          name="password"
         password={password}
        handleChange={handleChange('password')} 
        error={touched.password && errors.password} 
        label="Password"/>
        </Box>
        <Box>
        <CustomPassword
         name="confirmPassword" 
         password={confirmPassword}
         handleChange={handleChange('confirmPassword')}
         error={touched.confirmPassword && errors.confirmPassword} 
         label="Confirm Password"/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <Button variant="contained" color="warning" sx={{mx:2}} onClick={handleSubmit}>Sign Up</Button>
        <Button variant="contained" color="warning" sx={{mx:2}} onClick={()=>history('/')}>Sign In</Button>
      
        </Box>
        </>
     )}}
    </Formik>

    </Grid>
    </Box>
    );
}

export default Signup;



