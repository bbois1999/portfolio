import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';
import { Header } from '../src/pagesections/header';
import { IntroWrapper } from '../src/pagesections/introwrapper';
import { MoreAboutMe } from '../src/pagesections/moreaboutmesection';
import { ContactMe } from '../src/pagesections/contactme';
import MyProjects from '../src/pagesections/my-projects';


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
        <IntroWrapper/>
        <MoreAboutMe/>
        <MyProjects/>
        <ContactMe/>
        <Copyright />
      </Box>
  );
};


export default Home;