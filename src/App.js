import React from 'react';
import StudentsList from './client/components/StudentsList';
import Navbar from './client/components/Navbar';

const App = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><StudentsList /></div>
    </div>
  );
}

export default App;
