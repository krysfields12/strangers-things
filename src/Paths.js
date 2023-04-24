import { Routes, Route } from "react-router-dom";
import { Posts, Register, Login } from "./components"
import { useState } from "react";

const Paths = () => {
  const [ posts, setPosts ] = useState([]) 
  return (
     <div>
      <Routes>
        <Route 
          path='/' 
          element={<Posts posts={posts}/>} 
        />
        <Route 
          path='/register' 
          element={<Register />} 
        />
        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
    </div>
)}

export default Paths