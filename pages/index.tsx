import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import { Header } from '../src/pagesections/header';
import { IntroWrapper } from '../src/pagesections/introwrapper';
import { MoreAboutMe } from '../src/pagesections/moreaboutmesection';
import { ContactMe } from '../src/pagesections/contactme';


//sx{{}} literally makes you able to use any css, AND YOU CAN LINK ANYTHING TO IT WITH CREATE THEME AND SELECT SPECIFIC PARTS OF THE CREATE THEME VARIABLE!!!!!!!!!!!!
//eventually figure out how to save styling in a variable you can pass into a jsx function
//to make a variable come up in a p or typography tag, use {} curly braces to indicate this




const Home: NextPage = () => {
  return (



      <Box
        sx={{
          bgcolor: 'Palette.primary', 
          textAlign: 'center',
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          flex: 'center',
        }}
      >
        <Header />
        <IntroWrapper />
        <MoreAboutMe />
        <ContactMe/>
        <Copyright />
      </Box>
  );
};


export default Home;

/*
Use hexadecimal to change color


const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
}*/