import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";

export const ContactMe = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      subject,
      email,
      message,
    };

    try {
      const response = await axios.post('/api/contact', data)

      console.log(response)

     alert('message submitted!');

      setName('')
      setSubject('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.log(error)
      throw error
    }


  };

  return (
    <Container>
      <Box
        sx={{
          fontSize: 30,
          fontFamily: "Russo One, sans-serif",
          fontWeight: "strong",
          paddingTop: 3,
          paddingBottom: 2,
          flex: "center",
        }}
      >
        Get In Touch
      </Box>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Box
          width={
            {
              xs: '92%',
              md: '80%'
            }
          }
          sx={{
            border: 1,
            borderColor: "#c1c1c1",
            borderRadius: 1,
            align: "left",
          }}
        >
          <Box component="form">
            <Box
              sx={{
                fontFamily: "Roboto Mono, monospace",
                color: "#4b5156",
                textAlign: "left",
                marginBottom: -1,
                marginLeft: 2,
                marginTop: 1,
              }}
            >
              Name
            </Box>

            <TextField
              fullWidth
              size="small"
              name="name"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ padding: 2 }}
              required
            />

            <Box
              sx={{
                fontFamily: "Roboto Mono, monospace",
                color: "#4b5156",
                marginBottom: -1,
                marginLeft: 2,
                textAlign: "left",
              }}
            >
              Subject
            </Box>

            <TextField
              fullWidth
              size="small"
              name="subject"
              id="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              sx={{ padding: 2 }}
              required
            />

            <Box
              sx={{
                fontFamily: "Roboto Mono, monospace",
                color: "#4b5156",
                marginBottom: -1,
                marginLeft: 2,
                textAlign: "left",
              }}
            >
              Email
            </Box>

            <TextField
              fullWidth
              size="small"
              name="email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ padding: 2 }}
              required
            />

            <Box
              sx={{
                fontFamily: "Roboto Mono, monospace",
                color: "#4b5156",
                marginBottom: -1,
                marginLeft: 2,
                textAlign: "left",
              }}
            >
              Message
            </Box>

            <TextField
              fullWidth
              multiline
              rows={5}
              name="message"
              id="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ padding: 2 }}
              required
            />

            <Button
              variant="outlined"
              type="submit"
              value="send"
              onClick={(e) => {
                handleSubmit(e);
              }}
              sx={{
                height: "50px",
                marginBottom: 2,
                width: "96.5%",
              }}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};
