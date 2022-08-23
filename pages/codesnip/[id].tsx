import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
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

interface IcodeSnippet {
  id: string;
  attributes: {
    title: string;
    body: {
      value: string;
    };
    field_programming_language: string;
  };
}

const SnipPage = () => {
  const [codeSnip, setCodeSnip] = useState<IcodeSnippet[]>([]);

  useEffect(() => {
    const getCodeSnip = async () => {
      const response = await axios.get(
        "http://96.126.98.115:8080/jsonapi/node/code_snippet"
      );
      const data = response.data.data;

      console.log(data);

      setCodeSnip(
        data.filter((codesnip: any) => {
          return codesnip.id === router.query.id;
        })
      );
    };
    getCodeSnip();
    console.log(codeSnip);
  }, []);

  const router = useRouter();

  return (
    <>
      <div>{codeSnip.map((codesnip) => {
        return(
        <Box>
            <Box sx={{fontSize: 40, margin: 2, marginLeft: 5, marginTop: 7}}>{codesnip.attributes.title}</Box>
            <Box sx={{fontSize: 25, marginTop: -2, marginLeft: 5}}><Typography component='span' sx={{fontFamily: "Roboto Mono, monospace", color: 'gray', fontSize: 25, marginLeft: 3, }}>Programming Language:</Typography> {codesnip.attributes.field_programming_language}</Box>
            <Box sx={{fontFamily: "Roboto Mono, monospace", fontSize: 20, margin: 5, padding: 2, border: 2 }}>{removeTags(codesnip.attributes.body.value)}</Box>
        </Box>
        )
      })}</div>
    </>
  );
};

export default SnipPage;

/* const paths = data.map((snipId: { id: any }) => {
        return {
            params: { id: snipId.id.toString()}
        }
    })

    console.log(paths)

    return {
        paths,
        fallback: false
    }
     http://localhost:8080/jsonapi/node/code_snippet?sort=id

export const getPaths = async() => {


    const response = await axios.get('')
    const data = await response.data

    console.log(data)

   
   
}

getPaths()

    */
