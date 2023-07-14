import { Stack,  Box,  useMediaQuery } from '@mui/material';
import Section1 from '../sections/contact/Section1';
import Section2 from '../sections/contact/Section2';

const Contact = () => {
  const isCustomSize = useMediaQuery('(max-width: 770px)');

  return (
    <Box paddingX={isCustomSize ? "1%" : "15%"}>
      <Stack direction= {isCustomSize ? "column" : "row"} justifyContent="center" alignItems="center">
        <Box sx={{ width: isCustomSize ? "100%" : "50%" }}>
          <Section1/>
        </Box>
        <Box sx={{ width: isCustomSize ? "100%" : "50%" }}>
          <Section2/>
        </Box>
      </Stack>
    </Box>
  )
}

export default Contact;
