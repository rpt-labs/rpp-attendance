const axios = require('axios');

const getStudents = async () => {
  const url = 'http://localhost:3000/students';
  try {
    const response = await axios.get(url)
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCurrentStudents = async () => {
  const url = 'http://localhost:3000/students/current';
  try {
    const response = await axios.get(url)
    return response.data;
  } catch (error) {
    return error;
  }
};

const getStudentsByCohort = async (cohortId) => {
  const url =`http://localhost:3000/students/cohort/${cohortId}`;
  try {
    const response = await axios.get(url)
    return response.data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getStudents,
  getCurrentStudents,
  getStudentsByCohort
};
