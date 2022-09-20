import React from 'react';
import {Typography,ListItem,ListItemIcon,ListItemButton,Box} from '@mui/material'
function CustomListItem({onclick2,onclick,title,icon,sx,selected}) {
    return (
      <Box sx={{'&:hover':{
        backgroundColor:"black",
        color:"white",
        fontWeight:"bold"
      }}}>
    <ListItem sx={sx} onClick={onclick2}>
     <ListItemButton onClick={onclick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <Typography variant="p" component="p" sx={{display:{
        xs:"none",
        sm:"none",
        lg:"block",
        md:"block"
    }}}>{title}</Typography>
    </ListItemButton>
    </ListItem>
      </Box>
    );
}

export default CustomListItem;