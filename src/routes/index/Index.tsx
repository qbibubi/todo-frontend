import React from "react";
import { Link } from "react-router-dom";

import Notes from "../../components/notes/Notes";


const Index: React.FC<any> = () => {
    return (
        <div className='main-content'>
            <Notes/>
            <Link to="signin">Sign In</Link> 
        </div>
    )
}

export default Index