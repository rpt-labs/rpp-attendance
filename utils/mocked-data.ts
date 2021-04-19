import { Student } from '../pages/api/students'
import { Cohort } from '../pages/api/cohorts'


export const sampleStudentData: Student[] = [
  {
    id: 1,
    status: 'Deferred',
    first_name: 'Brad',
    last_name: 'Gibson',
    preferred_name: '',
    pronounced_name: '',
    zoom_name: 'Brad Gibson',
    email: 'brad.gibson@example.com',
    github: 'bg123',
    state_of_residence: '',
    country_of_residence: 'USA',
    ever_attended: false,
    departure_reason: '',
    date_of_separation: '',
    seir: false,
    pronouns: '',
    has_accommodations: false,
    salesforce_contact_record: '',
  },
  {
    id: 2,
    status: 'Alum',
    first_name: 'Ashkan',
    last_name: 'Koppenol',
    preferred_name: 'Ashkan Koppenol',
    pronounced_name: '',
    zoom_name: 'Ashkan Koppenol',
    email: 'ashkan.koppenol@example.com"',
    github: 'happykoala933',
    state_of_residence: 'CA',
    country_of_residence: 'USA',
    ever_attended: true,
    departure_reason: '',
    date_of_separation: '',
    seir: true,
    pronouns: '',
    has_accommodations: false,
    salesforce_contact_record: '',
  },
]

export const sampleCohortsData: Cohort[] = []
