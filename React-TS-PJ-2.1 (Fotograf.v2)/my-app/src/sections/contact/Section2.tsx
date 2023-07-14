import React, { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box, Stack, useMediaQuery, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';



const Section2 = ({}) => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const isCustomSize = useMediaQuery('(max-width: 770px)');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
    .sendForm('service_7lve5fp', 'template_k2copxq', form.current!, 'KxoXI7KoZCwsnLsex')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    setName('');
    setEmail('');
    setPhoneNumber('');
    setText('');
  };

  const labelProps = {
    style: { fontSize: '1.2rem' },
  };
  const inputProps = {
    style: { fontSize: '1.2rem' }, 
  };



  return (
    <Box display="flex" justifyContent="left" alignItems="center">
      <Box sx={{ width: '100%', padding: isCustomSize ? "2% 2% 2% 2%" : "0 0 0 11% "}}>
        <Box display="flex" flexDirection="column" gap={3}>
          <form ref={form} onSubmit={sendEmail}>

            <Stack spacing={2}>
            <TextField
                  type="text"
                  name="name"
                  label="Numele / Prenumele"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '100%', maxWidth: 916 }}
                  InputProps={inputProps}
                  InputLabelProps={labelProps}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Stack direction={"row"} spacing={2}>
                  <TextField
                  type="tel"
                  name="phoneNumber"
                  label="Numarul de telefon"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '100%', maxWidth: 300 }}
                  InputProps={inputProps}
                  InputLabelProps={labelProps}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <TextField
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '100%', maxWidth: 600 }}
                  InputProps={inputProps}
                  InputLabelProps={labelProps}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </Stack>
                <TextField
                  type="text"
                  name="text"
                  label="Intrebare"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '100%', maxWidth: 916 }}
                  InputProps={inputProps}
                  InputLabelProps={labelProps}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  />
                <Box>
                <Button variant="contained" endIcon={<SendIcon />} sx={{ fontSize: '1.1rem' }}>
                Send
                </Button>
                </Box>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Section2;
