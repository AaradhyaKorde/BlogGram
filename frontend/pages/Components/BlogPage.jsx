import React, { useState, useEffect} from "react";
import Link from 'next/link';
import axios from "axios";
import Post from "./Post";

function BlogPage(){

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
      let x = async() => {
      let res = await fetch("http://localhost:3001/api/getBlogPosts",{
        method: "GET",
      });
      let data = await res.json();
      setBlogPosts(data);
      console.log(data);
      }
      x();
    }, []);
  


    return(<div>
               
        <Link href="/Components/Submit"><button>Submit blogs</button></Link>
        {blogPosts.map((blogPost) => (
          <Post
            key={blogPost._id}
            title={blogPost.title}
            content={blogPost.content}
          />
))}

    </div>);
}

export default BlogPage;