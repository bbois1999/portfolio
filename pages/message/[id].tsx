import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { fallback } from "google-gax/build/src/fallback";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";


function removeTags(str: string | null) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

interface IMessage{
    id: string
    attributes: {
        title: string
        body: {
            value: string
        }
        field_name: string
        field_email: string
        field_subject: string
    }
}

const MessagePage = () => {
  const [message, setMessage] = useState<IMessage[]>([]);

  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(
        "http://96.126.98.115:8080/jsonapi/node/message_box"
      );
      const data = response.data.data;

      console.log(data);

      setMessage(
        data.filter((codesnip: any) => {
          return codesnip.id === router.query.id;
        })
      );
    };
    getMessage();
    console.log(message);
  }, []);

  const router = useRouter();

  return (
    <>
      <Box sx={{fontSize: 50, margin: 5, fontFamily: 'Russo One, sans-serif',}}>Message {router.query.id}</Box>
      <div>{message.map((message) => {
        return(
        <Box>
          <Box sx={{borderBottom: 2, margin: 1, borderColor: 'lightgray'}}>
            <Box sx={{marginLeft: 5, fontFamily: 'Russo One, sans-serif', fontSize: 25}}><Typography component='span' sx={{color: 'gray', fontWeight: 'light', fontFamily: "Roboto Mono, monospace", fontSize: 25}}>From:</Typography> {message.attributes.field_name}</Box>
            <Box sx={{marginLeft: 5, fontFamily: 'Russo One, sans-serif', fontSize: 25}}><Typography component='span' sx={{color: 'gray', fontWeight: 'light', fontFamily: "Roboto Mono, monospace", fontSize: 25}}>Email</Typography> {message.attributes.field_email}</Box>
            <Box sx={{marginLeft: 5, fontFamily: 'Russo One, sans-serif', fontSize: 25, marginBottom: 5}}><Typography component='span' sx={{color: 'gray', fontWeight: 'light', fontFamily: "Roboto Mono, monospace", fontSize: 25}}>Subject:</Typography> {message.attributes.field_subject}</Box>
          </Box>
            
            <Box sx={{margin: 5, fontFamily: "Roboto Mono, monospace", fontSize: 20}}>{removeTags(message.attributes.body.value)}</Box>
        </Box>
        )
      })}</div>
    </>
  );
};

export default MessagePage;