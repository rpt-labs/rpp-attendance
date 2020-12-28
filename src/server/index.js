const express = require('express');
const cors = require('cors');
const api = require('./utils/api');
const students = require('./routes/students');

const port = process.env.PORT || 3002;

const app = express();
app.use(cors());
// @note: to be removed
const mockedData = [
  {
    'id': 1,
    'first_name': 'bob',
    'last_name': 'builder',
    'zoom_name': 'bobTheBuilder',
  },
  {
    'id': 2,
    'first_name': 'john',
    'last_name': 'doe',
    'zoom_name': 'jdoe',
  }
]

app.get('/api/students', async (req, res) => {
  const data = await api.getStudents();
  res.status(200).send(data);
});

app.use('/attendance/students', students);

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});