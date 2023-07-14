import { Box, useTheme, Typography, styled } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: "#99ffff",
    color: "#EC68DC"
  }));


export const Section1 = () => {
    const theme= useTheme();

return (
    <Box m={"20px"}>
       

        <StyledAccordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            How long have you been a photographer?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h4">
                In excess of 20 years and I still get excited every week I get to do a wedding.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            Are you official photographer?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                Yes. When you book my service you will get me.  
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            Do you shoot with digital or film?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                Primarily with digital as it affords me much more control over post production. 
                However, I originally shot in film, and I still like to use film whenever I get the chance.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            What kind of digital camera do you use?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                Digital Equipment. Latest Nikon camera's and lenses.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            Can personal appointments be made with you?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                I would be very happy to meet with you and discuss your event.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            How much does it cost to have you capture my wedding? 
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                I provide 6 hours of coverage  which includes myself and and associate photographer and all the edit time and a 
                gallery with high resolution files that you may download and use anytime you wish.   
                Price  for all this is $1900.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            How far in advance do you recommend we book your service?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                I recommend booking my service 8-12 months prior to the event. However, due to some unexpected circumstance or cancellation,
                I might be available for last minute reservations. 
                Feel free to inquire if I am available on certain days with short notice.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            What style of photography do you have?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                I would call it “A Blend of Photojournalism with Fashion Impact”.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        
        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            What style of photography do you have?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                I would call it “A Blend of Photojournalism with Fashion Impact”.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        
        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            What kind of pictures can I expect from my wedding?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                Mainly  candid moments ,creative posed and formal photographs. I love timeless black and white images. 
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        
        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            How much deposit is required?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                There is $500. non-refundable deposit that’s required, as well as a contract.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        
        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            Do you allow other people to take photographs while you are working?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                  Yes. However, during the most important moments it would be better for you to minimize it as much as possible.
                  Please see the link. http://www.huffingtonpost.com/bridal-guide/why-you-might-want-to-con_b_3331528.html
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            Do you have liability insurance?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                Yes.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            Do you have backup equipment?
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="h4">
                Yes.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion defaultExpanded> 
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h3">
            How long dose it take to get all edited images.
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h4">
                Good post-production work takes time…. ( 10 days )
                </Typography>
            </AccordionDetails>
        </StyledAccordion>

    </Box>
)

}

export default Section1