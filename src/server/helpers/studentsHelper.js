const { getStudents, getCurrentStudents, getStudentsByCohort}   = require('../utils/api');

const getAllStudents = async() => {
  try {
    const response = await getStudents();
    return response;
  } catch (error) {
    console.log(`Error fetching students`);
    return error;
  }
};

const getAllCurrentStudents = async() => {
  try {
    const response = await getCurrentStudents();
    return response;
  } catch (error) {
    console.log(`Error fetching students`);
    return error;
  }
};

const getCohortStudents = async(cohortId) => {
  try {
    const response = await getStudentsByCohort(cohortId);
    return response;
  } catch (error) {
    console.log(`Error fetching students`);
    return error;
  }
};

module.exports = {
  getAllStudents,
  getAllCurrentStudents,
  getCohortStudents
};
