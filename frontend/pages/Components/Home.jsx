import React from "react";
import Login from "./Login";
import Register from "./Register"
import Link from 'next/link';

function Home(){
    return(<div>
        <img src="" alt="" />
        <h1>Blog Gram</h1>
        <p>lorem</p>
        <Link href="/Components/Login"><button>Login</button></Link>
        <Link href="/Components/Register"><button>Register</button></Link>
    </div>);
}

export default Home;