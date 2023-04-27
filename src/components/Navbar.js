import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ setToken, setIsLoggedIn, isLoggedIn }) {
  function logout() {
    setToken("");
    setIsLoggedIn(false);
    window.localStorage.removeItem("token");
  }
  return (
    <nav>
      <h1>Stranger's Things!</h1>
        {isLoggedIn ? (
          <>
            <button>
              <Link to="/create-post">Create Post</Link>\
              <Link to="/">See All Post</Link>
            </button>
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <>
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/register">Register</Link>
            </button>
          </>
      )}
    </nav> 
  )
}


