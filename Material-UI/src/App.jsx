import "./App.css";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Right from "./components/Right";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import AppContextProvider from "./AppContextProvider";

function App() {

  const [mode, setMode] = useState("dark");

  const darktheme = createTheme({
    palette:{
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darktheme}>
    <Box sx={{
      backgroundColor:"background.default",
      color:"text.primary"
    }}>
      <Navbar />
      <Stack direction={"row"} justifyContent={"space-between"} pt={10}>
        <AppContextProvider>
        <Sidebar setMode={setMode} mode={mode}/>
        </AppContextProvider>
        <Feed />
        <Right />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;