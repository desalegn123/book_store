import React, { useState } from "react";
import "../css/addstudent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/student/register", {
        roll,
        username,
        password,
        grade,
      })
      .then((res) => {
        if (res.data.registered) {
          navigate("/dashboard");
        }
        console.log(res)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='student-form-container'>
      <form className='student-form' onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className='form-group'>
          <label htmlFor='roll'>Roll No:</label>
          <input
            type='text'
            id='roll'
            name='role'
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='username'>user Name:</label>
          <input
            type='text'
            id='username'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='grade'>Grade:</label>
          <input
            type='text'
            id='grade'
            name='grade'
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>register</button>
      </form>
    </div>
  );
}

export default AddStudent;
