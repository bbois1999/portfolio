import { Container, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Table from "@mui/material/Table"
import Link from "../Link"
import { FC } from "react"





interface TableProps{
    headers: string[]
    data: any[]
    keys: string[]
}


const TableMessageTemplate:FC<TableProps> = (props) => {
    const {data, headers, keys} = props
    
    return(
        <Container>
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
                    {data.reverse().map((x)=> (
                         
                        <TableRow sx={{lineHeight: 5, '&:hover': {background: "rgb(7, 177, 77, 0.42)"}}} component={Link} href={'/message/' + x.id} key={x.id}>
                           
                            {keys.map((key)=> <TableCell variant="body"  key={key} sx={{maxHeight: 100, overflow: 'auto'}}>{x[key]}</TableCell> )}
                           
                        </TableRow>
                        
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default TableMessageTemplate