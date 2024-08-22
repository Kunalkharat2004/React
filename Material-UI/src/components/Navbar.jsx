import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const StyledToolBar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })

    const SearchBar = styled("div")(({theme})=>({
        backgroundColor:"white",
        width:"60%",
        borderRadius: theme.shape.borderRadius
    }))

    const Icons = styled(Box)(({theme})=>({
        display:"none",
        gap:"20px",
        alignItems:"center",
        [theme.breakpoints.up("sm")]:{
            display:"flex"
        }
    }))

    const UserBox = styled(Box)(({theme})=>({
        display:"flex",
        gap:"10px",
        alignItems:"center",
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    }))
  return (
    <>
    <Box>
      <AppBar position="fixed">
        <StyledToolBar>
        <Typography
         variant="h6"
         sx={{
            display:{
                xs:"none",
                sm:"block"
            }
         }}
        >
            amazon
        </Typography>
        <AdbIcon sx={{
            display:{
                xs:"block",
                sm:"none"
            }
        }}/>
        <ExpandMore sx={{
            display:{
                xs:"block",
                sm:"none"
            }
        }}
        onClick={()=>setSidebarOpen(!sidebarOpen)}/>

        <SearchBar>
            <InputBase placeholder="search" ></InputBase>
        </SearchBar>
        <Icons>
            <Badge badgeContent={4} color="error">
                <MailIcon/>
            </Badge>
            <Badge badgeContent={2} color="error">
            <ShoppingCartIcon />
            </Badge>
            <Badge badgeContent={6} color="error">
            <NotificationsIcon />
            </Badge>
            <Avatar onClick = {()=>setOpen(true)} src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="casy" sx={{
                width:"40px",
                height:"40px",
                cursor:"pointer",
            }}/>
        </Icons>
        <UserBox>
            <Avatar onClick = {()=>setOpen(true)} src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="casy"  sx={{
                width:"30px",
                height:"30px",
                cursor:"pointer",
            }}/>
            <Typography variant="span">
                Casy
            </Typography>
        </UserBox>
        </StyledToolBar>
        <Menu
        id="basic-menu"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}

      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
    </Box>
      </>
  )
}

export default Navbar