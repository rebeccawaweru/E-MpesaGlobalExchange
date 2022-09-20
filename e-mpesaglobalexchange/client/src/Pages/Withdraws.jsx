import client from "../api/client"
import React,{useState,useEffect} from "react"
import {CustomSideBar2,CustomAppBar} from '../Components';
import {Box,Stack,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material'
const Withdraws = ()=>{
     const [data,setData] = useState([])
     async function getWithdraws(){
        await client.get('/transaction').then((response)=>{
            setData(response.data.transaction)
        })
     }
     useEffect(()=>{
        getWithdraws()
     },[])
    return(
        <Box sx={{width:"100%", height:"100vh",display:"flex", position:"relative",overflow:"hidden"}}>
        <Box sx={{width:"20%"}}>
        <CustomSideBar2/>
        </Box>
        <Box sx={{width:"80%"}}>
        <CustomAppBar/>
        <Stack direction="row" alignItems="center" spacing={2} sx={{mt:3,mx:2}}>
            <TableContainer component={Paper} elevation={0}>
     <Table aria-label="simple table" stickyHeader >
       <TableHead>
         <TableRow>
           <TableCell align="left" style={{width: 100}}>Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Phone</TableCell>
           <TableCell align="left" style={{width: 100}}>Email</TableCell>
           <TableCell align="left" style={{width: 100}}>M-pesa Number</TableCell>
           <TableCell align="left" style={{width: 100}}>Bank Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Bank Acc. Number</TableCell>
           <TableCell align="left" style={{width: 100}}>Branch</TableCell>
           <TableCell align="left" style={{width: 100}}>Mode</TableCell>
           <TableCell align="left" style={{width: 100}}>Account</TableCell>
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
             <TableCell align="left">{row.mpesanumber}</TableCell>
             <TableCell align="left">{row.bankname}</TableCell>
             <TableCell align="left">{row.accountnumber}</TableCell>
             <TableCell align="left">{row.branch}</TableCell>
             <TableCell align="left">{row.method}</TableCell>
             <TableCell align="left">{row.accounttype}{" "}: {row.accounttypenumber}</TableCell>
             {/* <TableCell align="left"><VisibilityIcon  color="success" /></TableCell>
             <TableCell align="left"><DeleteIcon sx={{color: red[500]}} /></TableCell> */}
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
</Stack>
     
        </Box>
     
        </Box>
    )
}
export default Withdraws