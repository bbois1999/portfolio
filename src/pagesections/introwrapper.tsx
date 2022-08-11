import Typography from "@mui/material/Typography";
import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useState } from "react";


export const IntroWrapper = () => {
  
  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, 
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container
      sx={{
        align: "center",
        width: "90%",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        sx={{
          border: 2,
          justify: "center",
          borderColor: "#c1c1c1",
          borderRadius: 2,
          borderShadow: "rgba(0, 0, 0, 0.75) -1px 1px 3px -1px",
          borderBottom: 0,
        }}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            border: 2,
            borderColor: "#c1c1c1",
            borderRadius: 0,
            borderLeft: 0,
            borderRight: 0,
            borderTop: 0,
          }}
        >
          <Grid
            container
            item
            xs={4}
            sx={{
              align: "left",
              padding: 2,
            }}
          >
            <Grid
              item
              sx={{
                height: 17,
                width: 17,
                borderRadius: "50%",
                border: 1,
                backgroundColor: "#FC6058",
                color: "#FC6058",
                boxShadow: 5,
                padding: 1,
              }}
            >

            </Grid>
            <Grid sx={{ width: 5 }}> </Grid>
            <Grid
              item
              sx={{
                height: 17,
                width: 17,
                borderRadius: "50%",
                border: 1,
                backgroundColor: "#FEC02F",
                color: "#FEC02F",
                boxShadow: 5,
                padding: 1,
              }}
            >
              
            </Grid>
            <Grid sx={{ width: 5 }}> </Grid>
            <Grid
              item
              sx={{
                height: 17,
                width: 17,
                borderRadius: "50%",
                border: 1,
                backgroundColor: "#2ACA3E",
                color: "#2ACA3E",
                boxShadow: 5,
                padding: 1,
              }}
            >
            </Grid>
          </Grid>

          <Grid item xs={3} sm={5} md={6.5} lg={7}>
            {" "}
          </Grid>

          <Grid
            item
            sx={{
              marginTop: 2,
              marginBottom: 2,
              
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto Mono, monospace",
                fontSize: 20,
              }}
            >
              <Link onClick={scroll} underline="none" color="black">
                Contact
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          sx={{
            marginTop: 5,
          }}
        >
          <Box
            component="img"
            sx={{
              width: 200,
              border: 5,
              borderRadius: 2,
            }}
            src="/assets/images/portPicb.png"
          />
          <Box />
          <Typography
            sx={{
              fontFamily: "Russo One, sans-serif",
              fontSize: 23,
            }}
          >
            Brendan Bois
          </Typography>
          
          <Typography
            sx={{
              fontSize: 15,
              fontStyle: "oblique",
              marginBottom: 3,
              color: "gray",
            }}
          >
            *That's me right there
          </Typography>
        </Grid>

        <Grid container
          item
          xs={12}
          md={5}
          justifyContent={
            {
              xs: 'center',
              md: 'unset'
            }
          }
          marginBottom={
            {
              xs: 10,
              md: 'unset'
            }
          }
          padding={
            {
              xs: 3,
              md: 'unset'
            }
          }
          sx={{
            marginTop: 3,
          }}
        >
          <Box
            marginTop={
              {
                xs: -5,
                md: 7
              }
            }
            marginBottom={
              {
                xs: -5,
                md: 10
              }
            }
            sx={{
              textAlign: "left",
              border: 1.5,
              borderColor: "#17a2b8",
              width: 300,
              height: 180,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Russo One, sans-serif",
                fontSize: 30,
                padding: 1,
              }}
            >
              What I do
            </Typography>
            <Typography
              sx={{
                fontWeight: "lighter",
                fontFamily: "Roboto Mono, monospace",
                fontColor: "#4b5156",
                padding: 2,
              }}
            >
              My main focus is on the web with an emphasis on the React ecosystem.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
