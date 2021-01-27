import React, { useEffect, useState } from "react";
import facade from "./ApiFacade";

function Home () {
    
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        facade.getCourses().then((data) => {
          setCourses(data);
        });
      }, []);

      console.log(courses);


    return (
        <React.Fragment>
            <h2>List of all courses</h2>
            <table>
                <thead>
                <tr>
                    <th>Course name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {courses.map(course => (
                <tr>
                    <td>{course.courseName}</td>
                    <td>{course.description}</td>
                </tr>
                ))}
                </tbody>
            </table>
            </React.Fragment>
    )
}

export default Home;