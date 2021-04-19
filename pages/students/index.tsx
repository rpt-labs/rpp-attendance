import { useEffect, useState } from 'react'
import { Student } from '../api/students'

const Students = () => {
  const [students, setStudents] = useState<Student[]>([])
  const [currentList, setCurrentList] = useState('current')
  useEffect(() => {
    fetch('/api/students')
      .then((student) => student.json())
      .then((res) => {
        return setStudents(res.students)
      })
  }, [])

  return (
    <>
      <h1 className="m-12 font-medium text-xl">All Students</h1>
      <table className="shadow-lg bg-white m-12">
        <thead>
          <tr>
            <th className="bg-gray-100 border text-left px-8 py-4">Name</th>
            <th className="bg-gray-100 border text-left px-8 py-4">Status</th>
            <th className="bg-gray-100 border text-left px-8 py-4">Zoom Name</th>
            <th className="bg-gray-100 border text-left px-8 py-4">Email</th>
            <th className="bg-gray-100 border text-left px-8 py-4">Github</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td className="border px-8 py-4">{`${student.first_name} ${student.last_name}`}</td>
                <td className="border px-8 py-4">{student.status}</td>
                <td className="border px-8 py-4">{student.zoom_name}</td>
                <td className="border px-8 py-4">{student.email}</td>
                <td className="border px-8 py-4">{student.github}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-12">
        Select a status
      </button>
    </>
  )
}

export default Students
