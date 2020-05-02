import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withCookies} from 'react-cookie';

import CreateApp from './components/CreateApp';
import ListApps from './components/ListApps';
import UpdateApp from './components/UpdateApp';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


class App extends Component {
  render(){
  return (
    <Router>
      <div className="container">
        <Route path='/' exact render={() => (<Login cookies={this.props.cookies}/>)}/>
        <Route path='/list' render={() => (<ListApps cookies={this.props.cookies}/>)}/>
        <Route path='/create' render={() => (<CreateApp cookies={this.props.cookies}/>)}/>
        <Route path='/update/:id' render={() => (<UpdateApp cookies={this.props.cookies}/>)}/>
        <Route path='/dashboard'render={() => (<Dashboard cookies={this.props.cookies}/>)}/>
      </div>
    </Router>
  );
}
}


export default withCookies(App);
