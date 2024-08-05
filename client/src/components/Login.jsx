import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login=({setRoleVar}) =>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();
   
  const handleSubmit = () => {
    axios.defaults.withCredentials=true
    axios
      .post("http://localhost:3001/auth/login", { username, password, role })
      .then((res) => {
        if (res.data.login && res.data.role === "admin") {
          setRoleVar('admin')
          navigate("/dashboard");

        } else if (res.data.login && res.data.role === "student") {
          setRoleVar('student')
          navigate("/");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2 className=''>Login</h2>
        <br />
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            placeholder='enter username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>password:</label>
          <input
            type='password'
            id='password'
            placeholder='enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role:</label>
          <select name='role' onChange={(e) => setUserName(e.target.value)}>
            <option value='admin'>Admin</option>
            <option value='student'>Student</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
