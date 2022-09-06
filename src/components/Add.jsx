import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        open={open}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal 
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} bgcolor={'background.default'}color={'text.primary'} borderRadius={5}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="gray"
            textAlign="center"
          >
            Create a Post
          </Typography>
          <UserBox p={1}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography fontWeight={500} variant="span" p={1}>
              Sheeraz
            </Typography>
          </UserBox>
          <TextField
            sx={{width:'100%'}}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Default Value"
            variant="standard"
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary'/>
            <Image color='secondary' />
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
          </Stack>
          <ButtonGroup fullWidth variant='contained'>

          <Button>
            Post
          </Button>
          <Button sx={{width:'100px'}}>

          <DateRange />
          </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
