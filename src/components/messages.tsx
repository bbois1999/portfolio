import { Box, Container } from "@mui/material";
import axios from 'axios'
import { useState, useEffect } from "react";

interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export const Messages = () => {
    const [posts, setPosts] = useState<IPost[]>([])



    
useEffect(() => {
    const getPosts = async() => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(data)
            setPosts(data)
            
        }

    getPosts()
}, [])


    return(
        <>
            {posts.length > 0 && posts.map(post => {
                return(
                    <Box>
                        {post.title}
                        {post.body}
                    </Box>
                )
            })}
        </>
    )
}