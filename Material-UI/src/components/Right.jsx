import { Avatar, AvatarGroup, Badge, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from "@mui/material"
import React from "react";

function Right() {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <Box flex={2} p={2} sx={{
        display:{
            xs:"none",
            lg:"block"
        },
        overflowY: "auto", 
        overflowX:"hidden",
        maxHeight: '100vh', 
  
    }}>
      <Box position={"fixed"} width={390}>
        <Typography variant="h6" fontWeight={300} fontSize={30}>
          Online Friends
        </Typography>
        <AvatarGroup max={10} sx={{
          paddingRight:"50px",
          marginBottom:"30px"
        }}>

          
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </StyledBadge>

      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2765107/pexels-photo-2765107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
      <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2778171/pexels-photo-2778171.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      </StyledBadge>

      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/3105572/pexels-photo-3105572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2286655/pexels-photo-2286655.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
    </AvatarGroup>

    <Typography variant="h6" fontWeight={300} fontSize={30}>
      Latest`s Posts
    </Typography>

    <ImageList cols={3} rowHeight={144} gap={5}>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </ImageListItem>
    </ImageList>

    <Typography variant="h6" fontWeight={300} fontSize={30} mt={2}>
      Messages
    </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default Right