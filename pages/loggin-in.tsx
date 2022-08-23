import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import Link from "../src/Link";
import { FC, useState, Dispatch, SetStateAction } from "react";


interface LoggedInProps{
    loggedIn: boolean 
    setLoggedIn: Dispatch<SetStateAction<boolean>>
}

const LoggedIn:FC<LoggedInProps> = ({setLoggedIn}) => {

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.get("http://96.126.98.115:8080/user/logout", {
        withCredentials: true,
      });
      localStorage.removeItem('user');
      setLoggedIn(false);
    } catch (err) {
      setLoggedIn(true);
      console.log("sorry, you are logged in forever");
    }
  };

  return (
    <Container >
      <Box sx={{textAlign: "center"}}>
      <Box sx={{fontSize: 50, marginTop: 20}}>Welcome, Brendan!</Box>
      <h2>Which Page?</h2>
      <Box><Button variant="outlined" sx={{margin: 1}} href="http://96.126.98.115">Main Portfolio</Button></Box>
      <Box><Button variant="outlined" sx={{margin: 1}} href="http://96.126.98.115/code-snippets">Code Snippets</Button></Box>
      <Box><Button variant="outlined" sx={{margin: 1}} href="http://96.126.98.115/messages">Messages</Button></Box>

      <Button sx={{margin: 1}} onClick={handleSubmit}>Log out</Button>
      </Box>
    </Container>
  );
};

export default LoggedIn;
