import React, { Component } from 'react'
import ListApps from "./ListApps"
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
        console.log("pre:" + this.props.cookies.get('user'))
        this.setState({
            user: "",
            submit: false
        })
        this.props.cookies.remove('user', { path: '/' })
        console.log("post:" + this.props.cookies.get('user'))
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
        if (this.state.submit){
            return (<ListApps/>)
        }
        return (
            <div className="container">
                <form>
                <div className="form-group">
                    <label>User Name</label>
                    <input required type="text" className="form-control" value={this.state.user} onChange={this.onChangeUser}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default withCookies(Login);