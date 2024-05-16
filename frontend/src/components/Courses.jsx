import axios from 'axios';
import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useState, useEffect } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';



import './Courses.css'

const Courses = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('Working');
    axios.get('http://localhost:5000/course/courses').
      then((response) => {
        setItems(response.data.Data)
      }).catch((e) => {
        console.log(e);
      })
  }, [])
  return (
    <>
      <div className='Navbar'>
        <h1>Courses</h1>
      </div>

      <div className='Items'>
        {
          items.map((item) => (
            <Card name={item.name} />
          ))
        }
      </div>
        <br/>
        <br/><br/>
        <Link to='/addCourse'>
        <IoIosAddCircle className='add-btn' width={150} height={150}  />  
        </Link>
        <Link  to='/'>
        <FaHome className='add-btn' />
        </Link>
    </>

  )
}

export default Courses