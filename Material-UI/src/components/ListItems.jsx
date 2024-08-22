/* eslint-disable react/prop-types */
import {  Nightlight } from "@mui/icons-material";
import {  ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { useState } from "react";


function ListItems({link,icon,text,setMode,mode}) {

    
  const [theme,setTheme] = useState(false);

  return (
    <ListItem disablePadding>
        {link?(
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
        ):(
            <ListItemButton>
             <ListItem>
             <ListItemText primary={<Nightlight/>} />
                <Switch 
                onChange={(e)=>{
                  setTheme(e.target.checked)
                  return mode === "light"?setMode("dark"):setMode("light")}}
                checked={theme}/>
             </ListItem>
            </ListItemButton>
        )
            }
          </ListItem>
        )
}

export default ListItems