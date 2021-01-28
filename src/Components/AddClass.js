import facade from "./ApiFacade";
import React, { useState, useEffect } from "react";

const AddClass = () => {
    const initialValue = {
      semester: "",
      numberOfStudents: "",
      courseId: ""
    };

    const [Class, SetClass] = useState(initialValue);

    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        facade.getCourses().then((data) => {
          setCourses(data);
        });
      }, []);

    const [selectedOption, setSelectedOption] = useState("");

    const handleOption = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        SetClass({ ...Class, courseId: value });
    }

    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      SetClass({ ...Class, [name]: value });
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      facade.addClass(Class);
    }

    return (
      <div>
        <h1>Add new class</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="semester"
            placeholder="Semester"
            onChange={handleChange} />
          <br></br>
          <input
            type="number"
            name="numberOfStudents"
            placeholder="Number of students"
            onChange={handleChange} />
          <br></br>
           <select value={selectedOption} onChange={e => setSelectedOption(handleOption(e))}>
           <option value="" disabled selected>Select course</option>
               {courses.map(c => (
                   <option key={c.id} value={c.id}>{c.courseName}</option>
               ))}
           </select>
          <br></br>
          <input
            type="submit"
            value="save" />
        </form>
      </div>
    );
}

export default AddClass;