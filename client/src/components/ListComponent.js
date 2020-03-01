import React, { Component } from 'react'
import UpdateApp from './UpdateApp';
import { Link } from 'react-router-dom';


class ListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            status: ""
        }
        this.updateApp = this.updateApp.bind(this);
    }

    componentDidMount() {

        this.setState({
            status: Object.entries(this.props.application.status).filter(status => status[1] == true)[0][0]
        })
        
    }

    updateApp = (id) => {
        console.log("update presed: " + id)
        return <UpdateApp id={id}/>
    }

    render(){
        return(
        <tr>
            <td>{this.props.application.company}</td>
            <td>{this.props.application.position}</td>
            <td>{this.state.status}</td>
            <td>{this.props.application.date.substring(0,10)}</td>
            <td>
                <Link to={"/update/"+this.props.application._id}>edit</Link> | <button onClick={() => { this.props.deleteApp(this.props.application._id) }}>delete</button>
            </td>
        </tr>
        );
    }
}

export default ListComponent