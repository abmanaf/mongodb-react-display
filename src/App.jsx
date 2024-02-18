// App.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/local/getStudents")
      .then((students) => setStudents(students.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
            <th>Full Time</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            return(
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.age}</td>
              <td>{s.fullTime}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
