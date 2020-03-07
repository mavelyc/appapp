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
        console.log(this.props.match.params);
        axios.get("http://localhost:5000/applications/" + this.props.match.params.id)
            .then(res => this.setState({
                company: res.data.company,
                position: res.data.position,
            }))
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
                <form>
                <div className="form-group">
                    <label>Company Name</label>
                    <input required type="text" className="form-control" value={this.state.company} onChange={this.onChangeCompany}/>
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input required type="text" className="form-control" value={this.state.position} onChange={this.onChangePosition}/>
                </div>
                <div className="form-group">
                <label>Date </label>
                <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                    />
                </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }

};

export default UpdateApp;