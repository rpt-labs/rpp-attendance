import React from 'react';
import StudentsList from './client/components/StudentsList';

const students = [
  {
    firstName: 'john',
    lastName: 'doe'
  },
  {
    firstName: 'Jane',
    lastName: 'Smith'
  }
]

const App = () => {
  return (
  <div><StudentsList students={students}/></div>
  );
}

export default App;
