import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseForm = () => {
    const [name,setName] = useState('');
    const [message,setMessage] = useState('');
    const url = 'http://localhost:5000/course/addcourse';
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await axios.post(url,{name:name})
            setName('');
            setMessage('Form submitted successfully');
        }
        catch(e)
        {
            console.log(e);
        }
    }
  return (
    <div>
        <h1>Form</h1>
        <form action='POST' onSubmit={handleSubmit} >
            <input placeholder='Name' onChange={(e)=>{setName(e.target.value)}}></input>
            <button type='submit'  >Submit</button>
        </form>
        {message && <p>{message}</p>}
        <Link  to='/'>
        <FaHome className='add-btn' style={{marginTop:"100"}} />
        </Link>
    </div>
  )
}

export default CourseForm