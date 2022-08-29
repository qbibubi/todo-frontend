import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Index from './routes/index/Index';
import Signin from './routes/signin/Signin';
import Signup from './routes/signup/Signup';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // authenticate() -> boolean;

    return (
        <>
            <Routes>
                <Route path="/" element={<Index />}/>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} /> 
                <Route path="*" element={<Index />} /> // default
            </Routes>
        </>
    )
}

export default App;