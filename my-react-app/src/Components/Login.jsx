import { useState } from 'react';
import './Login.css';
import axios from 'axios';



const Login =()=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin =()=>{
        event.preventDefault();
    let loginData = {
        "username":username,
        "password":password
    }
    axios.post('https://dummyjson.com/auth/login',loginData)
    .then((result)=>{
        alert("Welcome "+result.data.firstName)
    }).catch(err=>{
        console.log(err)
    })
    }   

    return(<>
    <div className="login-container">
    <h2>Login</h2>
    <form>
      <label >Username</label>
      <input
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
       type="text" id="username" placeholder="Enter username" required/>

      <label >Password</label>
      <input 
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }} type="password" id="password" placeholder="Enter password" required/>

      <div className="button-group">
        <button type="submit" onClick={handleLogin} className="login-btn">Login</button>
        <button type="reset" className="reset-btn">Reset</button>
      </div>
    </form>
  </div>

    </>)
}

export default Login;