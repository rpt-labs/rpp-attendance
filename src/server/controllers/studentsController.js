const { getAllStudents, getAllCurrentStudents, getCohortStudents } = require('../helpers/studentsHelper');

exports.getStudents = async (req, res) => {
  const students = await getAllStudents();
  res.json(students);
};

exports.getCurrentStudents = async (req, res) => {
  const students = await getAllCurrentStudents();
  res.json(students);
};

exports.getCohortStudents = async (req, res) => {
  const cohortId = req.params;
  const students = await getCohortStudents(cohortId);
  res.json(students);
};
