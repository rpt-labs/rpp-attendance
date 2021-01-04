const express = require('express');
const cors = require('cors');
const api = require('./utils/api');
const students = require('./routes/students');

const port = process.env.PORT || 3002;

const app = express();
app.use(cors());

app.use('/api/students', students);

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});