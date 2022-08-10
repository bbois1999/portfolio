import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Grid  from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
const shploon = "/assets/images/shploon.jpg";

export const MoreAboutMe = () => {
    return(
<Grid container direction='row'columns={16} padding={
              {
                xs: 3,
                md: 10
              }
            } sx={{
        border: 1,
        marginTop: -.2,
        borderLeft: 0,
        borderRight: 0
    }}>

        <Grid item xs={16} md={6} sx={{
            marginLeft: '10%'
            }}>
                <Box sx={{
                    fontFamily: 'Russo One, sans-serif',
                    fontSize: 30,
                    justifyContent: 'flex-start',
                    display: 'flex'
                }}>More About Me</Box>
                <Box sx={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 2,
                    color: '#4b5156',
                    textAlign: 'left'
                }}>
                    I discovered my passion for coding in June of 2022. My roommate introduced me to it, and I was immediately hooked.
                </Box>
                <Box sx={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 2,
                    color: '#4b5156',
                    textAlign: 'left'
                }}>
                    Software development is what I want to do for the rest of my life, while I chase my dream of being a professional comedian.
                </Box>
                <hr/>
                <br/>
                <Box justifyContent={
                    {
                        xs: 'center',
                        md: 'left'
                    }
                }
                marginLeft={
                    {
                        xs: -2,
                        md: 'unset'
                    }
                }
                    sx={{
                    fontFamily: 'Russo One, sans-serif',
                    fontSize: 30,
                    display: 'flex'
                }}>
                    TOP EXPERTISE
                </Box>
                <Box justifyContent={
                    {
                        xs: 'center',
                        md: 'left'
                    }
                }
                marginLeft={
                    {
                        xs: -2,
                        md: 2
                    }
                }
                sx={{
                    display: 'flex',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 0,
                    color: '#4b5156',
                }}>
                    Front end developer
                    
                </Box>
                <Typography justifyContent={
                    {
                        xs: 'center',
                        md: 'left'
                    }
                }
                marginLeft={
                    {
                        xs: -2,
                        md: 2
                    }
                }
                sx={{
                        display: 'flex',
                        fontFamily: 'Roboto Mono, monospace',
                        marginTop: 0,
                        color: '#4b5156',
                        textAlign: 'center'
                    }}><Link>Download Resume</Link>
                </Typography>
                <Box marginLeft={{xs: 5, md: 'unset'}}>
                    <Grid container item direction='row' sx={{marginLeft: 5}}>
                        <Grid item md={6}>
                    <List sx={{lineHeight: .5, fontFamily: 'Roboto Mono, monospace', color: '#4b5156', marginLeft: -5}}>
                        <ListItem>NextJS</ListItem>
                        <ListItem>MUI</ListItem>
                        <ListItem>REACT</ListItem>
                    </List>
                        </Grid>
                        <Grid item md={6}>
                    <List 
                    sx={{lineHeight: .5, fontFamily: 'Roboto Mono, monospace', color: '#4b5156',}}>
                        <ListItem>CSS</ListItem>
                        <ListItem>HTML</ListItem>
                        <ListItem>Javascript</ListItem>
                    </List>
                        </Grid>
                    </Grid>
                </Box>
        </Grid>

        
        <Grid item xs={16} md={8} >
           <Box component="img" marginBottom={
                    {
                      xs: 2,
                      md: 5,
                    }
                  }
                  sx={{
                width: '75%',
                
                border: 5,
                borderRadius: 2,
            }}
            src={shploon}/>
            <Box/>
            <Box sx={{
                fontFamily: 'Russo One, sans-serif',
                fontSize: 20,
            }}>Find my Comedy on my Youtube and Website:</Box>
        <Container sx={{justifyContent: 'center', lineHeight: 3}}>
            <Box sx={{marginTop: 2}}><Link href="https://www.youtube.com/channel/UCI838L45k79cZ-ZOeMpFsvg/videos?view=0&sort=p&flow=grid">Youtube: Shploon</Link></Box>
            <Box><Link href="https://www.youtube.com/channel/UCI838L45k79cZ-ZOeMpFsvg/videos?view=0&sort=p&flow=grid">Website: Twee Bwendan Productions</Link></Box>
        </Container>
        </Grid>
</Grid>
    )
}