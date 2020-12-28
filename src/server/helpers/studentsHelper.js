const getStudents = require('../utils/api');

const getAllStudents = async() => {
  try {
    const response = await getStudents();
    return response;
  } catch (error) {
    console.log(`Error fetching students`);
    return error;
  }
};

module.exports = getAllStudents;