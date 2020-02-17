import React, { Component } from 'react'

class ListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            status: ""
        }
    }

    componentDidMount() {
        //console.log(this.props)
        //console.log(Object.entries(this.props.application.status).filter(status => status[1] == true)[0][0])
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
        </tr>
        );
    }
}

export default ListComponent