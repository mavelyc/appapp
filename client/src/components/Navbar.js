import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {withCookies} from 'react-cookie';



class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/list" className="navbar-brand">My Job Applications</Link> &nbsp;&nbsp;
                <Link to="/create" className="navbar-nav">Create</Link> &nbsp;&nbsp;
                <Link to="/dashboard" className= "dashboard">Dashboard</Link> &nbsp;&nbsp;
                <Link to="/" className="navbar-nav">Logout</Link> &nbsp;&nbsp;
            </nav>
        )
    }

};

export default withCookies(Navbar);