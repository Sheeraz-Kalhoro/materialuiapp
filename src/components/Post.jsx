import pic from "../s.jpg";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Share,
} from "@mui/icons-material";
import React from "react";

const Post = () => {
  return (
    <Box>
      <Card sx={{marginTop:'15px'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="250px   "
          image={pic}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />

          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
