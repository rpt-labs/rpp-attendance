import React,  { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
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
      <Table.Row key={`${student.first_name} ${student.last_name}`}>
        {student.preferred_name && <Table.Cell>{student.preferred_name}</Table.Cell>}
        {!student.preferred_name && <Table.Cell>{`${student.first_name} ${student.last_name}`}</Table.Cell>}
      </Table.Row>
    )
  })

  return (
    <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {renderedList}
    </Table.Body>
    </Table>
  )
}

export default StudentsList;

