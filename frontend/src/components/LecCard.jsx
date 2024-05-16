import React from 'react'
import './LecCard.css'
import { IoTrashBin } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const LecCard = (props) => {
    let date = props.date;
    return (
        <div>
            <div className='main-body'>
                <div className='left-part'>
                    <p> CourseName :  {props.name}</p>
                    <p> FacultyName :  {props.faculty}</p>
                    <p> Date :  {date.substr(0, 10)}</p>
                    <p> Level :  {props.level}</p>
                    <p> Description : {props.description}</p>
                </div>
                <div className='right-part'>
                    <IoTrashBin className='icons'/>
                    <FaPencilAlt className='icons' style={{color:"black"}} />
                    <FaEye className='icons' style={{color:"green"}}/>
                </div>
            </div>
        </div>
    )
}

export default LecCard