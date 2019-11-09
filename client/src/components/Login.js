import React, { useState } from "react";
import api from '../utils/api'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    
    const [error, setError] = useState()
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        api()
			.post('/login', userData)
			.then(res => {
				localStorage.setItem('token', res.data.payload)
				props.history.push('/bubblepage')
			})
			.catch(err => {
				setError(err)
			})
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          className='input' 
          name='username' 
          placeholder='Username'
          value={userData.username}
          onChange={handleChange} 
          />

          <input 
            type='password' 
            className='input'
            name='password' 
            placeholder='Password'
            value={userData.password}
            onChange={handleChange} 
          />
            
                <button type='submit' className='btn'>Sign In</button>
            </form>
        </div>
  );
};

export default Login;
