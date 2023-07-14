import { Box, Typography, IconButton, Link as MuiLink, styled, Stack  } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';

const InstagramLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.common.black,
  textDecoration: 'none',
}));


const Footer = () => {
  return (
    <Box sx={{py:10}}>

      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <IconButton component={InstagramLink} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <InstagramIcon sx={{ fontSize: '2rem', color: "#EC68DC" }} />
      </IconButton>

      <Stack direction={"row"} spacing={1}>
      <Typography variant="h4" color={"#24F1F1"}>
      EVA
      </Typography>
      <Typography variant="h4" color={"#EC68DC"}>
      PHOTOGRAPHER
      </Typography>
      </Stack>

      </Box>
    </Box>
  )
}

export default Footer