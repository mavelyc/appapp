import React, { Component } from 'react'
import axios from 'axios';

class ListApps extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
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
                        {/* {this.AppList()} */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListApps;