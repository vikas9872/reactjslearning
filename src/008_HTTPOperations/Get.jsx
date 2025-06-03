import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Post = () => {
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPostData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
    return (
        <div>
            <h2>GET</h2>
            <ul>
                {postData.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Post
