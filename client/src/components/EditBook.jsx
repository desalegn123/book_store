import React, { useEffect, useState } from "react";
import "../css/addstudent.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const {id}=useParams()
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const navigate = useNavigate();
  useEffect(()=>{
  axios
  .get("http://localhost:3001/book/book/"+ id)
  .then((res) => {
    setName(res.data.name)
    setAuthor(res.data.author)
    setImageUrl(res.data.imageUrl)
  })
  .catch((err) => console.log(err));
})


  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/book/book"+id, {
        name,
        author,
        imageUrl,
        
      })
      .then((res) => {
        if(res.data.updated){
          navigate('/books')
        }
      
     
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='student-form-container'>
      <form className='student-form' onSubmit={handleSubmit}>
        <h2>Edit Book</h2>
        <div className='form-group'>
          <label htmlFor='name'>Book Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='author'>Author Name:</label>
          <input
            type='text'
            id='author'
            name='author'
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='image'>image Url:</label>
          <input
            type='text'
            id='image'
            name='image'
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </div>
        
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

export default EditBook;
