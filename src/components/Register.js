import React, { useState } from 'react';

const Register = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (event) => {
    event.preventDefault();
}

console.log(username, password)
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter Username'
                onChange={(event) => setUsername(event.target.value)}
            />
            <input 
                type='password'
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)}

            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Register