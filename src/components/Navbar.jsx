import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Stack,
  Typography,
  Box,
  Avatar,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import YardIcon from "@mui/icons-material/Yard";
import React, { useState } from "react";
import { Mail, Notifications } from "@mui/icons-material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Mui App
        </Typography>
        <YardIcon sx={{ display: { xs: "block", sm: "none" } }} />

        <Box bgcolor={"Background.default"} p={0.5} px={2} borderRadius="10px">
          <InputBase
            placeholder="Search"
            sx={{ width: { xs: "100%", sm: "300px" } }}
            size="medium"
          />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Badge badgeContent={2} color="error">
            <Mail sx={{ marginLeft: "15px" }} />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications sx={{ marginLeft: "15px" }} />
          </Badge>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          gap="10px"
          onClick={(e) => setOpen(true)}
        >
          <Avatar
            alt="Sheeraz"
            src="/static/images/avatar/1.jpg"
            onClick={(e) => setOpen(true)}
            sx={{ cursor: "pointer" }}
          />
          <Typography
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              cursor: "pointer",
            }}
          >
            Sheeraz
          </Typography>
        </Stack>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
