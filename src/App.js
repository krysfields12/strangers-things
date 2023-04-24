import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Register,
  Posts,
  Login,
} from './components'

import { fetchPosts } from './api/posts';


function App() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const tokenCheck = () => {
        if (window.localStorage.getItem('token')) {
          setToken(window.localStorage.getItem('token'));
        }
      }
      tokenCheck();
  }, [])
  
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
        if(result.success) {
            setPosts(result.data.posts)
        };
      };
      getPosts();
}, [token]);
  
  
  return (
    <div>
      <Routes>
        <Route 
          path='/' 
          element={<Posts posts={posts} />} 
        />
        <Route 
          path='/register' 
          element={<Register setToken={setToken} />} 
        />
        <Route
          path='/login'
          element={<Login setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;