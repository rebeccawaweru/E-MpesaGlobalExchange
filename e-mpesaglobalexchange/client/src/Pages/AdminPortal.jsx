import React from 'react';
import {Box, Typography} from '@mui/material'
import {CustomSideBar2,CustomAppBar} from '../Components';
import Members from './Members';
function AdminPortal() {
    return (
        <Box sx={{width:"100%", height:"100vh",display:"flex", position:"relative",overflow:"hidden"}}>
        <Box sx={{width:"20%"}}>
        <CustomSideBar2/>
        </Box>
        <Box sx={{width:"80%"}}>
        <CustomAppBar/>
        {/* <Box sx={{display:"flex",backgroundColor:"whitesmoke",height:"100vh"}}>
           <Box sx={{width:"60%",height:"85vh", borderRadius:24,backgroundColor:"white",mx:3,mt:2,textAlign:"center",pt:3}}>
            <Typography variant="h4" component="h4" color="#5F29B8">Sales Report</Typography>
           </Box>
           <Box sx={{width:"40%",height:"85vh", borderRadius:24,backgroundColor:"white",mx:3,mt:2,textAlign:"center",pt:3}}>
            <Typography variant="h5" component="h5" color="#5F29B8">Year Sales</Typography>
           </Box>
        </Box> */}
        <Members/>
        </Box>
     
        </Box>
    );
}

export default AdminPortal;