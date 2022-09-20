import client from "../api/client"
import React,{useState,useEffect} from "react"
import {Box,Stack,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material'
const Members = ()=>{
     const [data,setData] = useState([])
     async function getUsers(){
        await client.get('/globalauth/getusers').then((response)=>{
            setData(response.data.users)
        })
     }
     useEffect(()=>{
        getUsers()
     },[])
    return(
        <Stack direction="row" alignItems="center" spacing={2} sx={{mt:3,mx:2}}>
            <TableContainer component={Paper} elevation={0}>
     <Table aria-label="simple table" stickyHeader >
       <TableHead>
         <TableRow>
           <TableCell align="left" style={{width: 100}}>Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Phone</TableCell>
           <TableCell align="left" style={{width: 100}}>Email</TableCell>
           <TableCell align="left" style={{width: 100}}>CR Account</TableCell>
           <TableCell align="left" style={{width: 100}}>ID Number</TableCell>
           <TableCell align="left" style={{width: 100}}>Bank Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Bank Number</TableCell>
           {/* <TableCell align="left" style={{width: 100}}>Date</TableCell> */}
           {/* <TableCell align="left" style={{width: 100}}>Actions</TableCell> */}
           
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((row, i) => (
           <TableRow key={i}>
             <TableCell align="left">{row.name}</TableCell>
             <TableCell align="left">{row.phone}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.craccount}</TableCell>
             <TableCell align="left">{row.idNumber}</TableCell>
             <TableCell align="left">{row.bankname}</TableCell>
             <TableCell align="left">{row.banknumber}</TableCell>
             {/* <TableCell align="left"><VisibilityIcon  color="success" /></TableCell>
             <TableCell align="left"><DeleteIcon sx={{color: red[500]}} /></TableCell> */}
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
</Stack>
    )
}
export default Members