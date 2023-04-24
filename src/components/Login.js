import React, { useState} from "react";
import { login } from "../api/users"



export default function Login ({ setToken }) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = async(event) => {
  event.preventDefault();
  const user = {username, password}

const results = await login (user);

if(results.sucess) {
    setToken(results.data.token);
    window.localStorage.setItem("token", results.data.token)
}


}

return (
  <form onSubmit={handleSubmit}>
    <input 
      type="text"
      placeholder="Enter Username"
      onChange={(event) => setUsername(event.target.value)}
    />
    <input 
      type="text"
      placeholder="Enter Password"
      onChange={(event) => setPassword(event.target.value)}
    />
  </form>        
 )
}
