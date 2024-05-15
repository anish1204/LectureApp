import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { IoIosAddCircle } from "react-icons/io";
import { FaBook,FaChalkboardTeacher } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

import Courses from './Courses'
import Card from './Card'

const Home = () => {
  return (
    <div className='Main'>
      <div>
        <div className='Navbar'>
          <h1>Admin Page</h1>
          <button>Login</button>
        </div>
        <div className='mbody'>
          <div className='Card'>
            <Link to='/courses' className='but' >
              <FaBook className='head-icons' />
              <h2>Courses</h2>
            </Link>
          </div>
          <div className='Card'>
            <Link to='/addfaculty' >
              <FaChalkboardTeacher className='head-icons'  />
              <h2>Faculty</h2>
            </Link>
          </div>
          <div className='Card'>
            <Link to='./addLecture'>
              <GiTeacher className='head-icons'/>
              <h2>Add Lecture</h2>
              {/* <IoIosAddCircle className='add-btn' width={50} height={150} /> */}
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home