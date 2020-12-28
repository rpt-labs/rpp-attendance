const getAllStudents = require('../helpers/studentsHelper');

exports.getStudents = async (req, res) => {
  const students = await getAllStudents();
  res.json({ students });
};