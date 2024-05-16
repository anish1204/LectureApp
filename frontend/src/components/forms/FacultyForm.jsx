import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const FacultyForm = () => {

    const [name, setName] = useState('');
    const [id, setid] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_KEY}/faculty/addteacher`, { name: name, fid: id })
            setMessage('Form submitted successfully');
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>Form</h1>
            <form action='POST' onSubmit={handleSubmit} >
                <input placeholder='Name' onChange={(e) => { setName(e.target.value) }}></input>
                <input placeholder='FID' onChange={(e) => { setid(e.target.value) }}></input>
                <button type='submit'  >Submit</button>
            </form>
            {message && <p>{message}</p>}
            <Link to='/'>
                <FaHome className='add-btn' style={{marginTop:"100"}} />
            </Link>
        </div>
    )
}

export default FacultyForm