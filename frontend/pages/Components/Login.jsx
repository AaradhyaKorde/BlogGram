import React from "react";
import Link from 'next/link';

function Login(){
    return(<div>
        <form action="">
        <Link href="/Components/BlogPage"><button>Login</button></Link>
        <Link href="/Components/Register"><button>Register</button></Link>
        </form>
        <h1>blah</h1>
    </div>);
}

export default Login;