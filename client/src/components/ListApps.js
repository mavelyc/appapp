import React, { Component } from 'react'
import axios from 'axios';

import ListComponent from './ListComponent'

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
    }

    appList () {
        return this.state.applications.map(currentApplication => {
            return <ListComponent application={currentApplication} key={currentApplication._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h2>All My Job Applications</h2>
                <table className="table">
                    <thead className="thread-light">
                        <tr>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Status</th>
                            <th>Date</th>
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

export default ListApps;