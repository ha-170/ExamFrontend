import React, { useEffect, useState } from "react";
import facade from "./ApiFacade";

function Classes () {
    
    const [classList, setClassList] = useState([]);

    useEffect(() => {
        facade.getClasses().then((data) => {
          setClassList(data);
        });
      }, []);

    return (
        <React.Fragment>
            <h2>List of all classes</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Semester</th>
                    <th>Number of students</th>
                    <th>Course name</th>
                    <th>Course description</th>
                </tr>
                </thead>
                <tbody>
                {classList.map(c => (
                <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.semester}</td>
                    <td>{c.numberOfStudents}</td>
                    <td>{c.course.courseName}</td>
                    <td>{c.course.description}</td>
                </tr>
                ))}
                </tbody>
            </table>
            </React.Fragment>
    )
}

export default Classes;