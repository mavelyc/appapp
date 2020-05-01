import React, { Component } from 'react'
import axios from 'axios';
import {withCookies} from 'react-cookie';

import ListComponent from './ListComponent'
import Navbar from './Navbar'

class ListApps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applications: []
        }
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
        console.log("no way:" + this.props.cookies.get('user'))
    }

    deleteApp = (id) => {
        axios.delete("http://localhost:5000/applications/" + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            applications: this.state.applications.filter(app => app._id != id)
        })
    }

    appList () {
        return this.state.applications.map(currentApplication => {
            return <ListComponent application={currentApplication} deleteApp={this.deleteApp} key={currentApplication._id}/>;
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <h2>All My Job Applications</h2>
                <table className="table">
                    <thead className="thread-light">
                        <tr>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Status</th>
                            <th>Date Applied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.appList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withCookies(ListApps);