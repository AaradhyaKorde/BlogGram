import React from "react";
import Home from "./Home";
import Link from "next/link";


function App(){
    return(<div>
        <Link href="/">
            <a>Home</a>
          </Link>
    </div>);
}

export default App;