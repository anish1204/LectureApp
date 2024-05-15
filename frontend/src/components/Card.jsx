import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
    <div className='CardOutline'>
            <div className='Card-header'>
                <h1>{props.name}</h1>
            </div>
            <div className='Card-body'>
              <Link to={`/viewLecture/${props.name}`}  >
              <button className='btn' >View</button>
              </Link>
            
                {/* <button className='btn'>Check</button>
                <button className='btn'>Edit</button>
                <button className='btn'>Delete</button> */}
            </div>
    </div>
  )
}

export default Card