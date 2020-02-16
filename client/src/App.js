import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateApp from './components/CreateApp';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path='/create' component={CreateApp}/>
      </div>
    </Router>
  );
}

export default App;
