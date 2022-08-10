import Typography from '@mui/material/Typography';

export const Header = () => {
    return(
      
      <Typography fontSize={
        {
          xs: 32,
          md: 56
        }
      } variant="h2" sx={{
        fontFamily: 'Russo One, sans-serif',
        fontWeight: 'strong',
        paddingTop: 5,
        paddingBottom: 5,
        flex: 'center',
        }}>
          Hi, I'm Brendan Bois
      </Typography>
    );
  };
  

//rafce makes a default header