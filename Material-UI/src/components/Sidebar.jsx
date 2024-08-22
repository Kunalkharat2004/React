/* eslint-disable react/prop-types */
import { Box, List } from "@mui/material"
import { AccountBox, Groups, Home, Pages, Person, Settings, Store } from "@mui/icons-material";
import ListItems from "./ListItems";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

function Sidebar({setMode,mode}) {

   const {handleSideBarOpen} = useContext(AppContext);
 
  return (
    <Box flex={1} p={2} sx={{
        display:{
            xs:"none",
            lg:"block"
        },
    }}>
      <Box sx={{
        position:"fixed"
      }}>
      
      <List>
      <ListItems text="Homepage" icon={<Home/>} link="https://www.google.com"/>
      <ListItems text="Pages" icon={<Pages/>} link="https://www.google.com"/>
      <ListItems text="Groups" icon={<Groups/>} link="https://www.google.com"/>
      <ListItems text="Store" icon={<Store/>} link="https://www.google.com"/>
      <ListItems text="Friends" icon={<Person/>} link="https://www.google.com"/>
      <ListItems text="Settings" icon={<Settings/>} link="https://www.google.com"/>
      <ListItems text="Profile" icon={<AccountBox/>} link="https://www.google.com"/>
      <ListItems  setMode={setMode} mode={mode}/>
      </List>
    </Box>
    </Box>
  )
}

export default Sidebar