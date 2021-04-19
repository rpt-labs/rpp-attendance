import { NextApiRequest, NextApiResponse } from 'next'

export type Cohort = {
  id: number
  cohort_id: string
  learn_id?: number
  product_code?: string
  rotation_id?: string
  schedule?: string
  start_date: string
  grad_date: string
  fifty_percent?: string
  sixty_percent?: string
  google_calendar_id?: string
  cohort_lead?: string
  tech_mentor?: string
  senior_phase_begins?: string
  fec_start?: string
  sdc_start?: string
  outcome_start?: string
  solo_1_start?: string
  solo_1_end?: string
  solo_2_start?: string
  solo_2_end?: string
  holiday_1_start?: string
  holiday_1_end?: string
  holiday_2_start?: string
  holiday_2_end: string
}

// export type Student = {

// }

const cohortsHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const apiResponse = await fetch('http://localhost:9001/api/cohorts')
  const data = await apiResponse.json()
  return res.send({ status: 200, cohorts: data.data })
}

export default cohortsHandler
