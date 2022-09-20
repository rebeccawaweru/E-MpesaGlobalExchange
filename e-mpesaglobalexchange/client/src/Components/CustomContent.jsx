import { Box } from "@mui/material"

export default function CustomContent({children,image,width,height}){
    return(
        <Box sx={{backgroundColor:"#3e5e04",backgroundImage:"linear-gradient(314deg, #3e5e04 0%, #727242 74%)",textAlign:"left",pl:3, height:{height}, width:{width},color:"white", borderRadius:5,mx:2,pr:2,pt:2, mb:2}}>
        <Box component="img" src={image} sx={{width:60,height:60,borderRadius:3,float:"right"}}/>
        {children}
      </Box> 
    )
}