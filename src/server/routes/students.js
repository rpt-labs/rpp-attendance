const { Router } = require('express');
const studentsRouter = Router();
const studentsController = require('../controllers/studentsController');

studentsRouter.get('/', studentsController.getStudents);

studentsRouter.get('/current', studentsController.getCurrentStudents);

studentsRouter.get('/cohort/:cohortId', studentsController.getCohortStudents);

module.exports = studentsRouter;
