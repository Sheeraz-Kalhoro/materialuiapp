// import "./App.css";
import { Button, Box, Stack, createTheme, ThemeProvider } from "@mui/material";
// import {Settings, Add} from '@mui/icons-material'
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { dark, light } from "@mui/material/styles/createPalette";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light')
  const theme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <Box bgcolor={'background.default'}color={'text.primary'}>
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-around'>
        <Sidebar mode={mode} setMode={setMode}/>
        <Feed/>
        <Rightbar/>
        </Stack>
        <Add/>
      </Box> 
      </ThemeProvider>
    </div>
  );
}

export default App;
