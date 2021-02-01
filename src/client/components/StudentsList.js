import React,  { useState, useEffect } from 'react';
import axios from 'axios';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;

  useEffect(() => {
    const getStudentsList = async () => {
      const { data } = await axios.get(`${REACT_APP_BASE_URL}/api/students`);
      setStudents(data);
    };
    getStudentsList()
  }, [REACT_APP_BASE_URL])

  const renderedList = students.map(student => {
    const { preferred_name, first_name, last_name } = student;
    return (
      <tr key={`${first_name} ${last_name}`}>
        {preferred_name && <td className="border px-8 py-4">{preferred_name}</td>}
        {!preferred_name && <td className="border px-8 py-4">{`${first_name} ${last_name}`}</td>}
      </tr>
    )
  })

  return (
    <div className="container">
      <table className="shadow-lg bg-white">
      <thead>
        <tr>
          <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
        </tr>
      </thead>
      <tbody>
        {renderedList}
      </tbody>
      </table>
    </div>
  )
}

export default StudentsList;

