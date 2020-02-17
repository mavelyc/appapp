import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateApp from './components/CreateApp';
import Navbar from './components/Navbar';
import ListApps from './components/ListApps'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route path='/' exact component={ListApps}/>
        <Route path='/create' component={CreateApp}/>
      </div>
    </Router>
  );
}

export default App;
