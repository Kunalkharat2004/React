import { Avatar, Box, Fab, Modal, TextField, Tooltip, Typography, styled } from '@mui/material'
import {Add as AddIcon} from "@mui/icons-material"
import { useState } from 'react';

const ModalStyled = styled(Modal) ({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})
const UserBox = styled(Box) ({
    display:"flex",
    alignItems:"center",
    gap:"10px"
})

function Add() {
    const [open, setOpen] = useState(false);
    
  return (
   <>
    <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{
        position:"fixed",
        bottom:20,
        left:{
            xs:"calc(50% - 25px)",
            md:30
        }
    }}>
        <Fab color="primary" aria-label="add">
         <AddIcon />
        </Fab>
    </Tooltip>

 <ModalStyled
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{
    width:"30%",
    height:"40%",
    borderRadius:"20px",
    padding:"20px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor:"background.default",
    color:"text.primary"
   
  }}>
    <Typography variant="h6" color="gray" mb={2}>
      Create post
    </Typography>
   <UserBox>
   <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2765107/pexels-photo-2765107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   <Typography variant="h6" fontWeight={500} >
      Kunal Kharat
    </Typography>
   </UserBox>
   <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={2}
         placeholder="Enter description"
          variant="standard"
          sx={{
            width:"100%"
          }}
        />
  </Box>
</ModalStyled>
   </>
  )
}

export default Add