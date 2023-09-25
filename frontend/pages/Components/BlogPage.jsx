import React, { useState, useEffect} from "react";
import Link from 'next/link';
import axios from "axios";
import Post from "./Post";

function BlogPage(props){

    const [blogPosts, setBlogPosts] = useState([]);

  function addBlogPost(newBlogPost) {
    setBlogPosts((prevBlogPosts) => [
      ...prevBlogPosts,
      newBlogPost,
    ]);
  }

  useEffect(() => {
    axios
      .get("/api/getBlogPosts")
      .then((res) => {
        setBlogPosts(res.data);
        console.log(res.data); // Add this line to debug
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
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