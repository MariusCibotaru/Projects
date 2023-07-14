import {  Stack, Hidden, styled, Container, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Link as MuiLink } from '@mui/material';
import MenuNav from './MenuNav';
import Logo from "../Image/Logo/Logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';


const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  width: "20rem",
  height: "auto",
}));







const NavBar = () => {
  const location = useLocation();
  const isCustomSize = useMediaQuery('(max-width: 770px)');
  const NavLink = styled(Link)(({ theme }) => ({
    color: "#EC68DC",
    textDecoration: 'none',
    position: 'relative',
    fontSize: '1.2rem',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -3,
      left: 0,
      width: 0,
      height: 3,
      backgroundColor: 'transparent',
      transition: 'width 0.3s ease',
    },
    '&:hover::after': {
      width: '100%',
      backgroundColor: "#EC68DC"
    },
    '&.active::after': {
      width: '100%',
      backgroundColor: "#EC68DC"
    },
  }));

  const NavLinkContact = styled(Link)(({ theme }) => ({
    color: "#24F1F1",
    textDecoration: 'none',
    position: 'relative',
    fontSize: '1.2rem',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -3,
      left: 0,
      width: 0,
      height: 3,
      backgroundColor: 'transparent',
      transition: 'width 0.3s ease',
    },
    '&:hover::after': {
      width: '100%',
      backgroundColor: "#24F1F1"
     
    },
    '&.active::after': {
      width: '100%',
      backgroundColor: "#24F1F1"
    },
  }));
  
  
  const InstagramLink = styled(MuiLink)(({ theme }) => ({
    color: "#EC68DC",
    textDecoration: 'none',
  }));


  return (

 
      <Container maxWidth="xl" sx={{ paddingY: "3%" }}>
        
             {/* Logo */}

          <Stack 
              direction="row" 
              alignItems="center" 
              justifyContent="space-between" 
              flexWrap="wrap"
            >
              <NavbarLogo
                src={Logo}
              alt="Logo"
              style={{ width: isCustomSize ? '15rem' : '20rem' }}
              />

              {/* Navigation */}
              <Stack 
                direction="row" 
                alignItems="center" 
                justifyContent="end" 
                spacing={6} 
                sx={{ flex: 1 }} 
                flexWrap="wrap"
              >
                <Hidden mdDown>

                <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
                HOME
                </NavLink>
                <NavLink to="/FAQ" className={location.pathname === '/FAQ' ? 'active' : ''}>
                FAQ
                </NavLink>
                <NavLinkContact to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                CONTACT
                </NavLinkContact>

                <IconButton component={InstagramLink} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ fontSize: '2rem', color: "#EC68DC" }} />
                </IconButton>

                </Hidden>

                <Hidden mdUp>
                <MenuNav />
              </Hidden>

              </Stack>
            </Stack>
          
      </Container>

  )
}

export default NavBar