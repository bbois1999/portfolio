import { Box, Container } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import AddSnippet from "../src/components/addsnippetform"
import TableTemplate from "../src/components/table"

interface IcodeSnippet{
    id: string
    attributes: {
        title: string
        body: {
            value: string
        }
        field_programming_language: string
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

const CodeSnippets = () => {
    const [codeSnips, setCodeSnips] = useState<IcodeSnippet[]>([])
    const [user, setUser] = useState(false);

    
    useEffect(() => {
        const getCodeSnips = async () => {
            const response = await axios.get('http://96.126.98.115:8080/jsonapi/node/code_snippet')
            console.log(response)
            setCodeSnips(response.data.data)
        } 
        getCodeSnips() 
        
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

   console.log(codeSnips)

    return(
    <>
    <Container sx={{justifyContent: 'center'}}>
        <Box sx={{fontSize: 50, marginTop:5, marginBottom: 5}}>Brendan's Code Snippets</Box>
    </Container>
        {user && <AddSnippet/>}

        <TableTemplate
        headers={["title", "body", "field_programming_language" ]}
        data={codeSnips.map((codesnip)=>{
            return {id: codesnip.id,
            title: codesnip.attributes.title,
            body: removeTags(codesnip.attributes.body.value),
            field_programming_language: codesnip.attributes.field_programming_language
            }
        }
    )}
        keys={["title", "body", "field_programming_language"]}
      /> 
    </>
    )
}

export default CodeSnippets


