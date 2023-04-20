import React from 'react';
import { Register } from './components'
import { Route, Routes, Link } from 'react-router-dom'


const App = () => {
    return (
       <div>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
               <Routes>
                    <Route exact path='/' element={ <Register />}  />
                </Routes>
        </div>
    )
}

export default App