import { Box, Container } from "@mui/material"
import axios from "axios"
import { Router } from "next/router"
import { useEffect, useState } from "react"
import AddSnippet from "../src/components/addsnippetform"
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
    
    useEffect(() => {
        const getMessages = async () => {
            const response = await axios.get('http://96.126.98.115:8080/jsonapi/node/message_box')
            console.log(response)
            setMessages(response.data.data)
        } 
        getMessages()
    }, [])

   console.log(messages)

   const router = useRouter();

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
    )
}

export default Messages