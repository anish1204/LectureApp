import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LecCard from './LecCard';


const Lecture = (props) => {
    const { id } = useParams();
    const [items,setItems] = useState([]);
    const url = 'http://localhost:5000/course/getlectures/'+id;
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setItems(res.data.Data);
        })
    },[])
  return (
    <div>
        <h1>{id}</h1>
        {
            items.map((item)=>(
                <LecCard name={item.name} faculty = {item.faculty} date = {item.date} level = {item.level} description = {item.description}   />
            ))
        }
    </div>
  )
}

export default Lecture