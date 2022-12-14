import { Box, Container } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import TableMessageTemplate from "../src/components/tablemessage"
import { useRouter } from "next/router"

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

const Messages = () => {
    const [messages, setMessages] = useState<IMessage[]>([])
    const [user, setUser] = useState(false);
    
    useEffect(() => {
        const getMessages = async () => {
            const response = await axios.get('http://96.126.98.115:8080/jsonapi/node/message_box')
            console.log(response)
            setMessages(response.data.data)
        } 
        getMessages()

        const test = () => {
            try {
              const data = JSON.parse(
                localStorage.getItem("user") || "no user in local storage"
              );
              //console.log(data.current_user.uid)
      
              //console.log(data.current_user.uid === "1");
              if (data.current_user.uid === "1") {
                setUser(true);
              }
            } catch (error) {
              console.log(user, "no user log in");
            }
          };
          test();
    }, [])

   console.log(messages)

   const router = useRouter();


   if (user){
    return(
    <>
    <Container sx={{justifyContent: 'center'}}>
        <Box sx={{fontSize: 50, marginTop:5, marginBottom: 5}}>Messages</Box>
    </Container>

        <TableMessageTemplate
        headers={["Name", "Email", "Subject", "Message" ]}
        data={messages.map((message)=>{
            return {id: message.id,
            body: removeTags(message.attributes.body.value),
            field_name: message.attributes.field_name,
            field_email: message.attributes.field_email,
            field_subject: message.attributes.field_subject

            }
        }
    )}
        keys={["field_name", "field_email", "field_subject", "body"]}
      /> 
    </>
    )}
}

export default Messages