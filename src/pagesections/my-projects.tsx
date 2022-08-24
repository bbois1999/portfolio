import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";

const MyProjects = () => {
    return(
    <Container sx={{border: 2, borderRadius: 1, borderColor: 'lightgray', borderTop: 0, paddingBottom: 10, paddingTop: 3}}>
        
            <Box sx={{fontFamily: 'Russo One, sans-serif', fontSize: 30, marginBottom: 5}}>
                Code Snippets and Past Projects
            </Box>
        <Grid container direction={{xs: 'column', md: 'row'}} justifyContent={
           { md: 'space-around' }
            } 
            display={{md: 'flex'}}
            sx={{ align: 'center'}}>
        <Box maxWidth={{md: '30%'}}>
            <Card sx={{boxShadow: '-1px 5px 5px 5px lightgray'}}>
                <CardMedia src="/assets/images/Capture.PNG" component="img" sx={{height: 200}}/>
                <CardContent sx={{justifyContent: 'flex-start'}}>
                    
                <Box sx={{fontFamily: 'Russo One, sans-serif',
                    fontSize: 25, marginTop: 1, textAlign: 'left'}}>DYNAMIC PAGES</Box>
                    
                    <Typography sx={{
                    justifyContent: 'center',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 2,
                    color: '#4b5156',
                    textAlign: 'left'
                }}>Take a look at my Github for examples on how 
                to create Dynamic Pages!</Typography>
                </CardContent>
                <CardActions>
                    <Button href="https://github.com/bbois1999/jsonapi_practice" size='large'>Take a Look!</Button>
                </CardActions>
            </Card>
        </Box>
        <Box maxWidth={{md: '30%'}}>
            <Card  sx={{boxShadow: '-1px 5px 5px 5px lightgray'}}>
                <CardMedia src="/assets/images/codesnippic.PNG" component="img" sx={{border: 1, borderRadius: 1, borderColor: 'gray', height: 200}}/>
                <CardContent>
                    
                    <Box sx={{fontFamily: 'Russo One, sans-serif',
                    fontSize: 30, marginTop: 1, textAlign: 'left'}}>CODE SNIPPETS</Box>
                    
                    
                    <Typography sx={{
                    justifyContent: 'flex-start',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 2,
                    color: '#4b5156',
                    textAlign: 'left'
                }}> my lazy reminders for when I don't feel like googling something again.</Typography>
                </CardContent>
                <CardActions>
                    <Button href="http://brendanbois.com/code-snippets" size='large'>Take a Look!</Button>
                </CardActions>
            </Card>
        </Box>
        <Box maxWidth={{md: '30%'}}>
            <Card sx={{boxShadow: '-1px 5px 5px 5px lightgray'}}>
                <CardMedia src="/assets/images/linkedinarticle.PNG" component="img" sx={{height: 200}}/>
                <CardContent>
                <Box sx={{fontFamily: 'Russo One, sans-serif',
                    fontSize: 20, marginTop: 1, textAlign: 'left'}}>DRUPAL, DOCKER, JSONAPI</Box>
                    
                    <Typography sx={{
                    justifyContent: 'flex-start',
                    fontFamily: 'Roboto Mono, monospace',
                    marginTop: 2,
                    color: '#4b5156',
                    textAlign: 'left'
                }}>Here's a guide on how to use Drupal, Docker, and json_api as a back end to your own application!</Typography>
                </CardContent>
                <CardActions>
                    <Button href="https://www.linkedin.com/pulse/drupal-docker-jsonapi-tutorial-brendan-bois"  size='large'>Take a Look!</Button>
                </CardActions>
            </Card>
        </Box>
            
        </Grid>
    </Container>
    )
}

export default MyProjects