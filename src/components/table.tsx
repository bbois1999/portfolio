import { Box, Container, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Table from "@mui/material/Table"
import Link from "../Link"
import { FC } from "react"





interface TableProps{
    headers: string[]
    data: any[]
    keys: string[]
}


const TableTemplate:FC<TableProps> = (props) => {
    const {data, headers, keys} = props
    
    return(
        <Container sx={{marginTop: 5, marginBottom: 5}} >
            <Table sx={{border: 2, color: 'lightgray', radius: 1}}>
                <TableHead>
                    <TableRow>
                        {headers.map((header)=>{
                            return(
                                <TableCell key={header}>{header}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody sx={{width: '100%'}}>
                    {data.map((x)=> (
                         
                        <TableRow  sx={{lineHeight: 5, '&:hover': {background: "rgb(7, 177, 77, 0.42)"}}} component={Link} href={'/codesnip/' + x.id} key={x.id}>
                           
                            {keys.map((key)=> <TableCell  variant="body"  key={key}><Box sx={{maxHeight: 100, overflow: 'auto'}}>{x[key]}</Box></TableCell> )}
                           
                        </TableRow>
                        
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default TableTemplate

//<Link sx={{width: '100%'}} href={'/codesnip/' + x.id} >