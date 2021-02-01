const axios = require('axios');
const { BASE_URL } = process.env;

const getStudents = async () => {
  const url = `${BASE_URL}/students`;
  try {
    const response = await axios.get(url)
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCurrentStudents = async () => {
  const url = `${BASE_URL}/students/current`;
  try {
    const response = await axios.get(url)
    return response.data;
  } catch (error) {
    return error;
  }
};

const getStudentsByCohort = async (cohortId) => {
  const url = `${BASE_URL}/students/cohort/${cohortId}`;
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
