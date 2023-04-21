import React, { useState, useEffect } from 'react';
import { Register, Post, Login } from './components'
import { Route, Routes, Link, } from 'react-router-dom'


const App = () => {
    
    const [token, setToken] = useState("");

    const tokenCheck = () => {
        if(window.localStorage.getItem("token")) {
            setToken(window.localStorage.getItem("token"));
        }
    }

    useEffect(() => {
        tokenCheck();
    }, []);

    return (
       <div>
            <nav>
                <Link to='/'>Register</Link>
            </nav>
               <Routes>
                <Route
                    path='/'
                    element={< Post />}
                />
                <Route 
                    path='/register' 
                    element={ <Register setToken={setToken} /> } 
                />
                <Route
                    path="/login"
                    element={ <Login />}
                />
                </Routes>
        </div>
    )
}

export default App  