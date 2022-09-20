import * as React from 'react';
import {Box,Button,Typography,Modal,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({title,content,open,handleClose}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <IconButton sx={{float:"right"}} onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
