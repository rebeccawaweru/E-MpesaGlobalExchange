import client from "../api/client"
import React,{useState,useEffect} from "react"
import {CustomSideBar2,CustomAppBar} from '../Components';
import {Box,Stack,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material'
const Deposits = ()=>{
     const [data,setData] = useState([])
     async function getDeposits(){
        await client.get('/payment/payments').then((response)=>{
            setData(response.data.payments)
        })
     }
     useEffect(()=>{
        getDeposits()
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
           <TableCell align="left" style={{width: 100}}>CR Account</TableCell>
           <TableCell align="left" style={{width: 100}}>Transaction Code</TableCell>
           <TableCell align="left" style={{width: 100}}>Amount Deposited</TableCell>
           <TableCell align="left" style={{width: 100}}>Invoice Number</TableCell>
           <TableCell align="left" style={{width: 100}}>Channel</TableCell>
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
             <TableCell align="left">{row.transactioncode}</TableCell>
             <TableCell align="left">{row.amount}</TableCell>
             <TableCell align="left">{row.invoicenumber}</TableCell>
             <TableCell align="left">{row.channel}</TableCell>
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
export default Deposits