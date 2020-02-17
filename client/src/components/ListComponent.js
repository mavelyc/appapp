import React, { Component } from 'react'

class ListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            status: ""
        }
    }

    componentDidMount() {

        this.setState({
            status: Object.entries(this.props.application.status).filter(status => status[1] == true)[0][0]
        })
        
    }

    render(){
        return(
        <tr>
            <td>{this.props.application.company}</td>
            <td>{this.props.application.position}</td>
            <td>{this.state.status}</td>
            <td>{this.props.application.date.substring(0,10)}</td>
            <td>
                <button onClick={() => { this.props.deleteApp(this.props.application._id) }}>delete</button>
            </td>
        </tr>
        );
    }
}

export default ListComponent