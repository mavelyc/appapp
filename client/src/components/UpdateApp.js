import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class UpdateApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            company: "",
            position: "",
            date: new Date()
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
    }

    componentDidMount(){
        console.log(this.props.id);
        axios.get("http://localhost:5000/applications/" + this.props.id)
            .then(res => console.log(res.data.company))
            .catch(err => console.log(err));

    }

    onChangeCompany(e) {
        console.log(this.state)
        this.setState({
            company: e.target.value
        })
    }

    onChangePosition(e) {
        console.log(this.state)
        this.setState({
            position: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
        console.log(this.state)
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("submit")
        const app = {
            company: this.state.company,
            position: this.state.position,
            date: this.state.date,
            status: {
                applied: true,
                interviewing: false,
                offered: false,
                rejected: false
            }
        }

        console.log(app);

        axios.post("http://localhost:5000/applications/add/", app)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div className="container">
                hello
            </div>
        );
    }

};

export default UpdateApp;