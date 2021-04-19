import { NextApiRequest, NextApiResponse } from 'next'
const isDeployed = false

import { sampleStudentData } from '../../../utils/mocked-data'

export type Student = {
  id: number
  status?: string
  first_name: string
  last_name: string
  preferred_name?: string
  pronounced_name?: string
  zoom_name?: string
  email?: string
  github?: string
  state_of_residence?: string
  country_of_residence?: string
  ever_attended?: boolean
  departure_reason?: string
  date_of_separation?: string
  seir?: boolean
  pronouns?: string
  has_accommodations?: boolean
  salesforce_contact_record?: string
}

const studentsHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const apiResponse = await fetch('http://localhost:9001/api/students')
  const data = isDeployed ? { data: sampleStudentData } : await apiResponse.json()
  return res.send({ status: 200, students: data.data })
}

export default studentsHandler
