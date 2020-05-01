import React, { Component } from 'react'
import axios from 'axios';
import ListApps from "./ListApps"

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
        axios.get("http://localhost:5000/applications/")
            .then(res => {
                this.setState({
                    applications: res.data
                })
                console.log(this.state.applications)
            })
            .catch(err => console.log(err))
    }

    onChangeUser(e) {
        console.log(this.state.user)
        this.setState({
            user: e.target.value
        })
    }

    onSubmit = () => {
        this.setState({
            submit: true
        })
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

export default Login;