import React,{useState,useEffect} from 'react';
import {Box, Typography,Button, Stack, Alert} from '@mui/material';
import {CustomTextField} from '../Components';
import client from '../api/client';
export default function Profile(){
    const [country,setCountry] = useState('')
    const id = localStorage.getItem('ID')
    const [data,setData]= useState({
        email:"",
        phone:0,
        name:"",
        craccount:"CR..",
        idNumber:0,
        bankname:"",
        banknumber:0

    })
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState(null)
    const [name,setName] = useState("")
    const [cracc,setCracc] = useState("")
    const [idnumber,setIdnumber] = useState(null)
    const [bankname,setBankname] = useState("")
    const [banknumber, setBanknumber] = useState(null)
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
    const [account,setAccount] = useState('')
        async function getUser(){
            await client.get('/globalauth/getuser/'+id).then((response)=>setData(
                response.data.user
            ))
        }
        useEffect(()=>{    
           getUser()
        },[])

        const handleUpdate = async() =>{
           if(!name){
            setName(data.name)
           }
           if(!phone){
            setPhone(data.phone)
           }
           if(!email){
            setEmail(data.email)
           }
           if(!account){
            setAccount(data.craccount)
           }
           if(!idnumber){
            setIdnumber(data.idNumber)
           }
           if(!bankname){
            setBankname(data.bankname)
           }
           if(!banknumber){
            setBanknumber(data.banknumber)
           }
           try {
            await client.patch('/globalauth/updateuser/'+id,{
              email:email,
              name:name,
              phone:phone,
              craccount:account,
              idNumber:idnumber,
              bankname:bankname,
              banknumber:banknumber
              }).then((response)=>{
                  if(response.data){
                    setMessage("Profile Updated Successfully")
                    setTimeout(()=>{
                    setMessage('')
                    },4000)
                  }
              })
          } catch (error) {
             console.log(error.message)
          }
       
        }
  return(
    <Box sx={{width:"80%",backgroundColor:"whitesmoke",color:"black",justifyContent:"center",alignItems:"center",textAlign:"center",pl:5}}>
      <Typography>Edit Profile Info</Typography>
      {message && <Alert color='success'>{message}</Alert>}
     
      <Stack direction="row" spacing={2} sx={{justifyContent:"center",alignItems:"center",textAlign:"center", mt:3}} >
   <Box><CustomTextField label="Binary Account or CR No" value={account} handleChange={(e)=>setAccount(e.target.value)} placeholder={data.craccount} /></Box>
      <Box> <CustomTextField label="ID Number" value={idnumber || ''} placeholder={data.idNumber} handleChange={(e)=>setIdnumber(e.target.value)} /></Box>
      </Stack>
      <Stack direction="row" spacing={2} sx={{justifyContent:"center",alignItems:"center",textAlign:"center",}} >
      <Box> <CustomTextField label="Name" value={name} handleChange={(e)=>setName(e.target.value)} placeholder={data.name}/></Box>
       <Box> <CustomTextField label="Email" value={email} handleChange={(e)=>setEmail(e.target.value)} placeholder={data.email}/></Box>
      </Stack>
         <Box><CustomTextField label="Phone Number" value={phone || ''} handleChange={(e)=>setPhone(e.target.value)} type="number" placeholder={data.phone}/></Box>
         <Stack direction="row" spacing={2} sx={{justifyContent:"center",alignItems:"center",textAlign:"center",}}>
         <Box> <CustomTextField label="Bank Account Name" value={bankname} placeholder={data.bankname} handleChange={(e)=>setBankname(e.target.value)}/></Box>
         <Box> <CustomTextField label="Bank Account No" value={banknumber || ''} placeholder={data.banknumber} handleChange={(e)=>setBanknumber(e.target.value)}/></Box>
         </Stack>

         <Box><Button variant="contained" onClick={handleUpdate}>Update</Button></Box>
    </Box>

  )
}