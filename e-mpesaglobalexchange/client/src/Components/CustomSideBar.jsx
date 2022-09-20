import React,{useState} from 'react';
import {Box,List,Divider,Typography} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SellIcon from '@mui/icons-material/Sell';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import CustomListItem from './CustomListItem';
import {empesa,ke} from '../assets'
import {useNavigate} from 'react-router-dom'
function CustomSideBar({selected,country,page1,page2,page3,page4,page5,page6,page7,page8}) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const history = useNavigate()
    const id = localStorage.getItem('ID')
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
     };
    const handleLogout = ()=>{
      localStorage.removeItem('ID')
     history('/')
    }
   
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <Box sx={{mt:1,mb:2,textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Box component="img" src={empesa} sx={{width:"12%",height:"5vh",mx:2,display:{
                lg:"block",
                md:"block",
                xs:"none",
                sm:"none"
              }}}/>
            <Typography variant="p" component="h4">E-Mpesa Global<br></br>Exchange</Typography>
    
            </Box>
            <Box component="img" src={country} alt="" sx={{height:35,width:35,mx:{
              lg:15,
              md:15,
              sm:2,
              xs:2
            }}}/>
            <CustomListItem selected={selectedIndex} onclick={page1} title="Home" icon={<HomeIcon color="warning"/>} />
            <CustomListItem title="Binary/Deriv" onclick={page1}  icon={<AlignHorizontalLeftIcon color="warning"/>} />
            <CustomListItem title="Perfect Money" onclick={page2}  icon={<LocalAtmIcon  color="warning"/>} />
            <CustomListItem title="Neteller" onclick={page3} icon={<LocalAtmIcon  color="warning"/>} />
            <CustomListItem title="Skrill" onclick={page4} icon={<LocalAtmIcon color="warning"/>} />
            <CustomListItem title="Bitcoin" onclick={page5} icon={<LocalAtmIcon color="warning"/>} />
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
          <CustomListItem title="Affiliates Program" onclick={page6} icon={<AccountTreeIcon color="warning"/>} />
          <CustomListItem title="Edit Profile Info" onclick={page7} icon={<AccountBoxIcon color="warning"/>} />
          <CustomListItem title="Support" onclick={page8} icon={<ChatIcon color="warning"/>} />
          </List>
          <CustomListItem sx={{bottom:0, '&:hover':{
           color:"black"
        }}} title="Logout" onclick2={handleLogout} icon={<ExitToAppIcon color="warning"/>} />
        </nav>
  
      </Box>
    );
}

export default CustomSideBar;