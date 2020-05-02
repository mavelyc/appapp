import React, { Component } from 'react'
import ListApps from "./ListApps"
import { Link } from 'react-router-dom';
import {withCookies} from 'react-cookie';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            submit: false
        }

        this.onChangeUser = this.onChangeUser.bind(this)
    }

    componentDidMount = () => {
        this.setState({
            user: "",
        })
        this.props.cookies.remove('user', { path: '/' })
    }

    onChangeUser(e) {
        console.log(this.state.user)
        this.setState({
            user: e.target.value
        })
    }

    onSubmit = () => {
        this.props.cookies.set('user', this.state.user, { path: '/' })
        this.setState({
            submit: true
        })
        console.log("cookies: " + this.props.cookies.get('user'))
    }

    render() {
        return (
            <div className="container">
                <form>
                <div className="form-group">
                    <label>User Name</label>
                    <input required type="text" className="form-control" value={this.state.user} onChange={this.onChangeUser}/>
                </div>
                <Link to="/list" className="navbar-nav" onClick={this.onSubmit}>Submit</Link>
                </form>
            </div>
        )
    }
}

export default withCookies(Login);