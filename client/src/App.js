import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateApp from './components/CreateApp';
import ListApps from './components/ListApps';
import UpdateApp from './components/UpdateApp';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="container">
        <Route path='/' exact component={Login}/>
        <Route path='/list' component={ListApps}/>
        <Route path='/create' component={CreateApp}/>
        <Route path='/update/:id' component={UpdateApp}/>
        <Route path='/dashboard'component={Dashboard}/>
      </div>
    </Router>
  );
}

export default App;
