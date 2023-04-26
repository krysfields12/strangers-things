import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Register,
  Posts,
  Login,
  CreatePost,
  NavBar
} from './components'

import { fetchPosts, myData } from './api/posts';


export default function App() {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const navigate = useNavigate();

  const tokenCheck = () => {
    if(window.localStorage.getItem("token")) {
        setToken(window.localStorage.getItem("token"));
    }
  }

  const getPosts = async () => {
      const result = await fetchPosts();
        if(result.success) {
            setPosts(result.data.posts)
        };
      };

  const getMyData = async() => {
    const results = await myData(token);
    if(results.success) {
        setUser(results.data);
    }
  }

      useEffect(() => {
        const tokenCheck = () => {
            if (window.localStorage.getItem('token')) {
              setToken(window.localStorage.getItem('token'));
            }
          }
          tokenCheck();
      }, [])

      useEffect(() => {
        getPosts();
        if (token) {
          getMyData();
          setIsLoggedIn(true);
        }
      }, [token]);
    
  
  
  return (
    <div>
      <NavBar 
        setToken={setToken}
        setIsloggedIn={setToken}
        isLoggedIn={isLoggedIn}
      /> 
      <Routes>
        <Route 
          path='/' 
          element={<Posts posts={posts} />} 
        />
        <Route 
          path='/register' 
          element={<Register setToken={setToken} navigate={navigate} />} 
        />
        <Route
          path='/login'
          element={<Login setToken={setToken} navigate={navigate}/>}
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