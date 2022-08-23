import { Alert, Box, Container, LinearProgress, Snackbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect, FC } from "react";
import axios from "axios";
import LoggedIn from "./loggin-in";

 


const AdminPage = () => {

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorNavBar, setErrorNavBar] = useState(false)

    useEffect(() => {
        if (localStorage.user){
            setLoggedIn(true)
        }
    }, [])

   

    console.log(isSubmitting ? 'submitting' : 'submitted')

    //JSON.parse(localStorage.user)


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true)

        try{
            const response= await axios.post('http://96.126.98.115:8080/user/login?_format=json', {name, pass}, {
                headers: {
                    "Content-Type": "application/vnd.api+json"
                },
                withCredentials: true})

        localStorage.user = JSON.stringify(response.data)
        console.log("Logging in...", response);

            setLoggedIn(true)
            setIsSubmitting(false)
        }catch(err){
            console.log('error')
            setIsSubmitting(false)
            setErrorNavBar(true)
        }

    }

    if (loggedIn) {
        return (
            
            <LoggedIn setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
            
        )
        
    }
    return (
        <Container sx={{
            marginTop: 20,
            width: 400,

        }}>
            <Box component='h1' textAlign='center'>Log In</Box>
            <Box component="form" textAlign='left' marginTop={-1}>
                <Box >
                    Username:
                </Box>
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    size='small'
                    required
                />

                <Box marginTop={2}>
                    Password:
                </Box>
                <TextField
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    fullWidth
                    size='small'
                    type="password"
                    required
                />
            </Box>

            <LoadingButton
                onClick={handleSubmit}
                variant="outlined"
                type="submit"
                sx={{
                    height: "45px",
                    marginBottom: 2,
                    marginTop: 3,
                    width: "100%",
                }}
                endIcon={<SendIcon />}
            >
                Submit
            </LoadingButton>
            
            {isSubmitting && <LinearProgress/>}
            {errorNavBar && <Alert severity="error">
                Not cheedleist for the first and the second president
            </Alert>}

        

        </Container>
    )

}

export default AdminPage

//login drupal restAPI