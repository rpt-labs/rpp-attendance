const { Router } = require('express');
const studentsRouter = Router();
const studentsController = require('../controllers/studentsController');

studentsRouter.get('/students', studentsController.getStudents);

module.exports = studentsRouter;