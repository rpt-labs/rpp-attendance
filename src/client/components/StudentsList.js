import React,  { useState, useEffect } from 'react';
import axios from 'axios';

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudentsList = async () => {
      const { data } = await axios.get('http://localhost:3002/api/students')
      setStudents(data);
    };
    getStudentsList()
  }, [])

  const renderedList = students.map(student => {
    return (
      <tr key={`${student.first_name} ${student.last_name}`}>
        {student.preferred_name && <td className="border px-8 py-4">{student.preferred_name}</td>}
        {!student.preferred_name && <td className="border px-8 py-4">{`${student.first_name} ${student.last_name}`}</td>}
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

