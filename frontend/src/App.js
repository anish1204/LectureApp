import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Courses from './components/Courses';
import LectureForm from './components/forms/LectureForm';
import CourseForm from './components/forms/CourseForm';
import FacultyForm from './components/forms/FacultyForm';
import Lecture from './components/Lecture';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/faculty'  />
        <Route path='/addLecture' element={<LectureForm/>}  />
        <Route path='/addCourse' element={<CourseForm/>} />
        <Route path='/addFaculty' element={<FacultyForm/>} />
        <Route path='/viewLecture/:id' element={<Lecture/>} />
      </Routes>
    </div>
  );
}

export default App;
