import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";

const MyProjects = () => {
    return(
    <Container sx={{border: 2, borderRadius: 1, borderColor: 'lightgray', borderTop: 0, paddingBottom: 10, paddingTop: 3}}>
        
            <Box sx={{fontFamily: 'Russo One, sans-serif', fontSize: 30, marginBottom: 5}}>
                Code Snippets and Past Projects
            </Box>
        <Grid container direction='row' sx={{diplay: 'flex', justifyContent: 'space-around', align: 'center'}}>
            <Card sx={{boxShadow: '-1px 5px 5px 5px red',}}>
                <CardContent>
                <Box sx={{fontFamily: 'Russo One, sans-serif',
                    fontSize: 30}}>DYNAMIC PAGES</Box>
                    <Box src="/assets/images/shploon.jpg" component="img" sx={{width: 350}}/>
                    <Typography sx={{
                    justifyContent: 'flex-start',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 2,
                    color: '#4b5156',
                    textAlign: 'left'
                }}>Take a look at my Github for examples<br/> on how 
                to create Dynamic Pages!<br/></Typography>
                </CardContent>
                <CardActions>
                    <Button size='large'>Take a Look!</Button>
                </CardActions>
            </Card>
            <Card sx={{boxShadow: '-1px 5px 5px 5px red',}}>
                <CardContent>
                <Box sx={{fontFamily: 'Russo One, sans-serif',
                    fontSize: 30}}>DRUPAL, DOCKER, JSONAPI</Box>
                    <Box src="/assets/images/shploon.jpg" component="img" sx={{width: 350}}/>
                    <Typography sx={{
                    justifyContent: 'flex-start',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 2,
                    color: '#4b5156',
                    textAlign: 'left'
                }}>Here's a guide on how to use Drupal,<br/>Docker, and json_api as a back end to <br/>your own application!</Typography>
                </CardContent>
                <CardActions>
                    <Button size='large'>Take a Look!</Button>
                </CardActions>
            </Card>
            <Card sx={{boxShadow: '-1px 5px 5px 5px red',}}>
                <CardContent>
                    <Box sx={{fontFamily: 'Russo One, sans-serif',
                    fontSize: 40}}>CODE SNIPPETS</Box>
                    <Box src="/assets/images/shploon.jpg" component="img" sx={{width: 350}}/>
                    
                    <Typography sx={{
                    justifyContent: 'flex-start',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 2,
                    color: '#4b5156',
                    textAlign: 'left'
                }}> my lazy reminders for when I don't feel <br/> like googling something again.</Typography>
                </CardContent>
                <CardActions>
                    <Button href="http://96.126.98.115:3000/code-snippets" size='large'>Take a Look!</Button>
                </CardActions>
            </Card>
            
        </Grid>
    </Container>
    )
}

export default MyProjects