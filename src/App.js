import React from 'react';
import StudentsList from './client/components/StudentsList';
import Attendance from './client/components/Attendance';
import Cohorts from './client/components/Cohorts';
import Navbar from './client/components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/students">
            <StudentsList />
          </Route>
          <Route path="/attendance">
            <Attendance />
          </Route>
          <Route path="/cohorts">
            <Cohorts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
