import React from 'react';
import {Box,List,Typography} from '@mui/material'
import CustomListItem from './CustomListItem';
import {empesa} from '../assets';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AlarmIcon from '@mui/icons-material/Alarm';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArchiveIcon from '@mui/icons-material/Archive';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {useNavigate} from 'react-router-dom'
function CustomSideBar2({selected}) {
   const history = useNavigate()
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
     };
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor:'#5F29B8',height:"100vh",color:"white" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <Box sx={{mt:1,mb:3,textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Box component="img" src={empesa} sx={{width:"12%",height:"5vh",mx:2, display:{
                sm:"none",
                xs:"none",
                lg:"block",
                md:"block"
              }}}/>
            <Typography variant="p" component="h4">E-Mpesa Global<br></br>Exchange</Typography>
            </Box>
            <CustomListItem title="Members" onclick={()=>history('/admin')} icon={<PeopleIcon fontSize='large' sx={{color:"white"}}/>} />
            {/* <CustomListItem selected={selectedIndex} title="Dashboard" icon={<WarehouseIcon fontSize='large' sx={{color:"white"}}/>} /> */}
            <CustomListItem title="Deposits"  onclick={()=>history('/deposits')} icon={<ArchiveIcon fontSize='large' sx={{color:"white"}}/>} />
            <CustomListItem title="Withdraws"  onclick={()=>history('/withdraws')} icon={<CameraRearIcon fontSize='large' sx={{color:"white"}}/>} />
            <CustomListItem title="Reset Password"  onclick={()=>history('/adminreset')} icon={<VpnKeyIcon fontSize='large' sx={{color:"white"}}/>} />
            <CustomListItem title="E-mails" icon={<MailOutlineIcon  fontSize='large' sx={{color:"white"}}/>} />
            <CustomListItem title="Chat Support" icon={<HeadsetMicIcon fontSize='large' sx={{color:"white"}}/>} />
            <CustomListItem title="Time Table" icon={<AlarmIcon fontSize='large' sx={{color:"white"}}/>} />
            <CustomListItem title="Contacts" icon={<LocalPhoneIcon fontSize='large' sx={{color:"white"}}/>} />
            <CustomListItem title="Logout" onclick={()=>history('/')} icon={<ExitToAppIcon fontSize='large' sx={{color:"white"}}/>} />
          </List>
        </nav>
      </Box>
    );
}

export default CustomSideBar2;