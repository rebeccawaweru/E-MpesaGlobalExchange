import React,{useState} from 'react';
import {TextField,InputAdornment,IconButton} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
function CustomPassword({label,password,handleChange,name,error}) {
    const [showPassword,setshowPassword] = useState(false)
    const handleClickShowPassword = ()=>{
       if(showPassword){
        setshowPassword(false)
       }else{
        setshowPassword(true)
       }
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
    <>
    <TextField sx={{mb:1}} 
     name={name}
      value={password}
     onChange={handleChange}
     label={label}
      type={showPassword ? 'text' : 'password'}
      error={error}
       InputProps={{
       endAdornment: (
            <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {!showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
    )}}/>
    </>
    );
}

export default CustomPassword;