import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/list" className="navbar-brand">My Job Applications</Link>
                <Link to="/create" className="navbar-nav">Create</Link>
                <Link to="/" className="navbar-nav">Logout</Link>
            </nav>
        )
    }

};

export default Navbar;