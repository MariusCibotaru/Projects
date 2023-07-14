import React, { useState } from 'react';
import { Dialog, IconButton, AppBar, Toolbar, Typography, Button, Slide, Stack, Box } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) => {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MenuNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const handleClick = (to: string) => {
    navigate(to);
    onCloseHandler();
  };

  return (
    <Box>
      <IconButton color="inherit" onClick={onOpenHandler}>
        <MenuIcon style={{ fontSize: '35px', color: "#24F1F1" }} />
      </IconButton>
      <Dialog
        open={open}
        fullScreen
        fullWidth
        TransitionComponent={Transition}
        hideBackdrop
        PaperProps={{
          sx: {
            boxShadow: 'none',
          },
        }}
      >
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="h4" sx={{ flexGrow: 1, color: "#EC68DC" }}>
              Menu
            </Typography>

            <IconButton onClick={onCloseHandler} sx={{ color: "#EC68DC" }}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box display="flex" flexDirection="column" alignItems="center" py={3} px={2} width="100%">
          <Stack direction="column" alignItems={"center"} spacing={3}>
            <Typography 
            variant='h5'
            onClick={() => handleClick('/')} 
            sx={{ fontWeight: location.pathname === '/' ? 'bold' : 'normal', color: "#EC68DC" }}>
              HOME
            </Typography>
            <Typography 
            variant='h5'
            onClick={() => handleClick('/FAQ')} 
            sx={{ fontWeight: location.pathname === '/About' ? 'bold' : 'normal', color: "#EC68DC"}}>
              FAQ
            </Typography>
            <Typography 
            variant='h5'
            onClick={() => handleClick('/Contact')} 
            sx={{ fontWeight: location.pathname === '/Contact' ? 'bold' : 'normal', color: "#EC68DC" }}>
              CONTACT
            </Typography>
          </Stack>
        </Box>
      </Dialog>
    </Box>
  );
};

export default MenuNav;
