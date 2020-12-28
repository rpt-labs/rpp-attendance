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

module.exports = {
  getStudents
};
