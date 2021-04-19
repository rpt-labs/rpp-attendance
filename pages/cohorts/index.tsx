import { useEffect, useState } from 'react'
import { Cohort } from '.././api/cohorts'

const Cohorts = () => {
  const [cohorts, setCohorts] = useState<Cohort[]>([])
  useEffect(() => {
    fetch('/api/cohorts')
      .then((cohort) => cohort.json())
      .then((res) => {
        return setCohorts(res.cohorts)
      })
  }, [])

  return (
    <table className="shadow-lg bg-white m-10">
      <thead>
        <tr>
          <th className="bg-gray-100 border text-left px-8 py-4">Name</th>
          <th className="bg-gray-100 border text-left px-8 py-4">Start Date</th>
          <th className="bg-gray-100 border text-left px-8 py-4">Graduation Date</th>
        </tr>
      </thead>
      <tbody>
        {cohorts.map((cohort) => {
          return (
            <tr key={cohort.cohort_id}>
              <td className="border px-8 py-4">{cohort.cohort_id}</td>
              <td className="border px-8 py-4">{cohort.start_date}</td>
              <td className="border px-8 py-4">{cohort.grad_date}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Cohorts
