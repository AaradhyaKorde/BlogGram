import React, { useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from "axios";

function Submit(props){

    
    const [blogPost, setBlogPost] = useState({
        title: "",
        content: ""
    })

    function handleBlogChange(event){
        const {name, value} = event.target;

        setBlogPost(prevBlogPost => {
            return {
                ...prevBlogPost,
                [name]: value
            }
        })
    }
    

    function submitBlogPost(event){

        event.preventDefault();

        // props.addBlogPost(blogPost);

        axios.post("http://localhost:3001/api/saveBlogPost",blogPost)
            .then((res) => {
                console.log('Data saved successfully:', res.data);
                setBlogPost({
                title: "",
                content: ""
            });
        })
        .catch((error) => {
            console.error('Error saving data:', error);
          });;
    };

    const router = useRouter()

    return(<div>
        <form action="" onSubmit={submitBlogPost}>
            <input name="title" onChange={handleBlogChange} value={blogPost.institute} placeholder="Title" />
            <input name="content" onChange={handleBlogChange} value={blogPost.university} placeholder="Content" />
            <button type="submit" onClick={() => router.push('/Components/BlogPage')}>Add</button>
            {/* <Link href="/Components/BlogPage"><button  type="submit" >Add</button></Link> */}
            {/* <button  type="submit" >Add</button> */}
            
            </form>
    </div>);
}

export default Submit;