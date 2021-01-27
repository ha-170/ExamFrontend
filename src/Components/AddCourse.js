import facade from "./ApiFacade";
import React, { useState } from "react";

const AddCourse = () => {
    const initialValue = {
      courseName: "",
      description: ""
    };
  
    const [course, SetCourse] = useState(initialValue);
  
    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      SetCourse({ ...course, [name]: value });
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      facade.addCourse(course);
    }

    return (
      <div>
        <h1>Add new course</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="courseName"
            placeholder="Course name"
            onChange={handleChange} />
          <br></br>
          <input
            type="text"
            name="description"
            placeholder="Course description"
            onChange={handleChange} />
          <br></br>
          <input
            type="submit"
            value="save" />
        </form>
      </div>
    );
}

export default AddCourse;