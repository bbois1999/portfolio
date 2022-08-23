import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";

const AddSnippet = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let data = {
      data: {
        type: "node--code_snippet",
        attributes: {
          title: title,
          body: {
            value: body,
            format: "plain_text",
          },
          field_programming_language: language,
        },
      },
    };

    console.log(JSON.stringify(data));

    try {
      const response = axios.post(
        "http://96.126.98.115:8080/jsonapi/node/code_snippet",
        data,
        {
          headers: {
            "Content-Type": "application/vnd.api+json",
            "X-CSRF-Token": JSON.parse(localStorage.getItem("user") || '').csrf_token 
            /* 
                     {
                        "current_user": {
                            "uid": "1",
                            "roles": [
                                "authenticated",
                                "administrator"
                            ],
                            "name": "bbois1999"
                        },
                        "csrf_token": "Fz5RrwVtJ7UBJ4vBAQZkwVdTw-tzI5th-rZS8UzGLXg",
                        "logout_token": "ZYS74Rmw2-GiXO_v9hKWLsgVSl6Yy2kpes88nLpLwk4" 
                    }
                        */,
          },
          withCredentials: true,
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container sx={{ align: "center" }}>
      <Box
        component="form"
        sx={{
          maxWidth: "100%",
          textAlign: "left",
        }}
      >
        <Box fontSize={32}>Add Snippet</Box>
        <Box>Snippet Title</Box>

        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          size="small"
        />

        <Box marginTop={2}>Body</Box>

        <TextField
          value={body}
          onChange={(e) => setBody(e.target.value)}
          fullWidth
          multiline
          rows={8}
        />

        <Box marginTop={2}>Programming Language</Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            size="small"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            sx={{
              width: "50%",
              marginLeft: -3,
            }}
          />
          <Button
            variant="outlined"
            onClick={(e) => {
              handleSubmit(e);
            }}
            sx={{
              width: "50%",
              marginRight: -3,
            }}
          >
            Add Snippet!
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default AddSnippet;

/*   relationships: {
                uid: {
                    data: {
                        type: 'user--user',
                        id: '1'
                    }
                }

            }*/
