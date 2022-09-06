import React from "react";
import img1 from "../1.jpg";
import img2 from "../2.jpg";
import img3 from "../3.jpg";
import img4 from "../4.jpg";
import img5 from "../5.jpg";
import {
  AvatarGroup,
  Avatar,
  Box,
  Typography,
  ImageListItem,
  ImageList,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Title } from "@mui/icons-material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width="300px">
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={img1} alt="Buildings" />
          </ImageListItem>
          <ImageListItem>
            <img src={img2} alt="Buildings" />
          </ImageListItem>
          <ImageListItem>
            <img src={img3} alt="Buildings" />
          </ImageListItem>
          <ImageListItem>
            <img src={img4} alt="Buildings" />
          </ImageListItem>

          <ImageListItem>
            <img src={img5} alt="Buildings" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Conversation
        </Typography>
        <List cols={3} rowHeight={100}        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
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
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
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
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
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
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
