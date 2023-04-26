import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Register,
  Posts,
  Login,
  CreatePost
} from './components'

import { fetchPosts } from './api/posts';


export default function App() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  
    const getPosts = async () => {
      const result = await fetchPosts();
        if(result.success) {
            setPosts(result.data.posts)
        };
      };

      useEffect(() => {
        const tokenCheck = () => {
            if (window.localStorage.getItem('token')) {
              setToken(window.localStorage.getItem('token'));
            }
          }
          tokenCheck();
      }, [])

      useEffect(() => {
        getPosts()
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
        <Route 
          path='/create-post'
          element={<CreatePost token={token} getPosts={getPosts} />}
        />
      </Routes>
    </div>
  );
}



// component life-cycle
// Mount (initial render) -> updates ( re-render) -> unmount