import React from 'react';
import {TextField,InputAdornment} from '@mui/material'
function CustomTextField({placeholder,icon,label,type,handleChange,value,name,error,color,bg,fullWidth,helper}) {
    return (
    <>
    <TextField sx={{mb:3, "& label": {color:{color}},backgroundColor:{bg}}} placeholder={placeholder}
     helperText={helper}
      name={name}
      value={value}
      onChange={handleChange}
      label={label}
      error={error}
      type={type}
      fullWidth={fullWidth}
       InputProps={{
        startAdornment: (
          <InputAdornment position="start">
           {icon}
          </InputAdornment>
        ),
      }}/>
    </>
    );
}

export default CustomTextField;