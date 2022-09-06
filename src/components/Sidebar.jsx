import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Article,
  DarkMode,
  Diversity3,
  Group,
  Home,
  Person2,
  Settings,
  Storefront,
} from "@mui/icons-material";
const Sidebar = ({mode, setMode}) => {
  const siderbarMenu = [
    { text: "Home Page", icon: <Home /> },
    { text: "Pages", icon: <Article /> },
    { text: "Groups", icon: <Group /> },
    { text: "Market Place", icon: <Storefront /> },
    { text: "Friends", icon: <Diversity3 /> },
    { text: "Settings", icon: <Settings /> },
    { text: "Profile", icon: <Person2 /> },
    {
      text: (
        <Switch onChange={e => setMode(mode === 'light'? 'dark':'light')}
          //   checked={checked}
          //   onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      ),
      icon: <DarkMode />,
    },
  ];
  return (
    <Box  flex={1} p={2} sx={{display:{xs:'none', sm:'block'}}}>
     <Box position='fixed'>

     <List>
        {siderbarMenu.map((btn) => (
            <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon sx={{ display: { xs: "block", sm: "block" } }}>
                {btn.icon}
              </ListItemIcon>
              <ListItemText primary={btn.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
              </Box>
    </Box>
  );
};

export default Sidebar;
