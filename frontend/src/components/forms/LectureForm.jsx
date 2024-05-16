import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Form.css'


const LectureForm = () => {

    const [name, setName] = useState('');
    const [faculty, setFaculty] = useState('');
    const [fid, setfid] = useState('');
    const [date, setDate] = useState('');
    const [level, setLevel] = useState('');
    const [description, setDesc] = useState('');
    const [message, setMessage] = useState('');
    const url = `${process.env.REACT_APP_API_KEY}/lecture/addlecture`;


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url,
                { course_name: name, faculty: faculty, fid: fid, date: date, level: level, description: description }
            );
            setMessage('Form submitted successfully');
            setDesc('');
            setDate('');
            setfid('');
            setName('');
            setFaculty('');
        }
        catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <h1>Form</h1>
            <form action='POST' onSubmit={handleSubmit} >
                <input placeholder='Name' onChange={(e) => { setName(e.target.value) }}></input>
                <input placeholder='Faculty' onChange={(e) => { setFaculty(e.target.value) }}></input>
                <input placeholder='FID' onChange={(e) => { setfid(e.target.value) }}></input>
                <input type='date' placeholder='Date' onChange={(e) => { setDate(e.target.value) }}></input>
                <input placeholder='Level' onChange={(e) => { setLevel(e.target.value) }}></input>
                <input placeholder='description' onChange={(e) => { setDesc(e.target.value) }}></input>
                <button type='submit'>Submit</button>
            </form>
            {message && <p>{message}</p>}
            <Link to='/'>
                <FaHome className='add-btn' style={{marginTop:"100"}} />
            </Link>
        </div>
    )
}

export default LectureForm