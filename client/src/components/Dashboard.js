import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {
    XYPlot, LineSeries, XAxis, YAxis,
    HorizontalGridLines, VerticalGridLines,
    RadialChart, ChartLabel, VerticalBarSeries, yDomain
} from 'react-vis';
import { Row, Container, Col } from 'react-bootstrap'
import Navbar from './Navbar';

class Dashboard extends Component {
    render() {



        //dummy data get data from API request (Line chart data)
        const lineData = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 }
        ];

        //dummy data to be gotten from a GET request (Circle graph data)
        const circleData = [{ angle: 1, label: "Offers" }, { angle: 5, label: "Rejections" }, { angle: 2 , label: "Interviews"}]

        //data for bar graph to get from database
        const barData = [
            { id: '00036', y: 200400, x: 1504121437 },
            { id: '00036', y: 200350, x: 1504121156 },
            { id: '00036', y: 200310, x: 1504120874 },
            { id: '00036', y: 200260, x: 1504120590 },
            { id: '00036', y: 200210, x: 1504120306 },
            { id: '00036', y: 200160, x: 1504120024 },
            { id: '00036', y: 200120, x: 1504119740 },
            { id: '00036', y: 200070, x: 1504119458 },
            { id: '00036', y: 200020, x: 1504119177 },
            { id: '00036', y: 199980, x: 1504118893 },
            { id: '00036', y: 199930, x: 1504118611 },
            { id: '00036', y: 199880, x: 1504118330 },
            { id: '00036', y: 199830, x: 1504118048 },
            { id: '00036', y: 199790, x: 1504117763 },
            { id: '00036', y: 199740, x: 1504117481 }
        ];

        const yDomain = barData.reduce(
            (res, row) => {
                return {
                    max: Math.max(res.max, row.y),
                    min: Math.min(res.min, row.y)
                };
            },
            { max: -Infinity, min: Infinity }
        );

        return (

            <div className="App">
            <Navbar />
            <br /><br />
                <h1>Welcome to your Personal Job Applications Dashboard </h1>
                <br /> <br /> <br /> <br />

                
                <Container>
                
                    <Row>
                        <Col>

                        <ChartLabel>Job Applications Over Time></ChartLabel>
                            <XYPlot height={350} width={400}>
                                <VerticalGridLines />
                                <HorizontalGridLines />
                                <XAxis />
                                <YAxis />
                                <LineSeries data={lineData} />
                            </XYPlot>
                        </Col>
                        <Col>

                            <h4>Job Applications Over Time</h4>

                            <RadialChart height={350} width={400}
                                data={circleData}
                                labelsRadiusMultiplier={0.9}
                                labelsStyle={{
                                    fontSize: 16
                                }}
                                showLabels
                            />

                        </Col>

                    </Row>
                </Container>

                <br /> <br /> <br /> <br />

                <center>
                    <h4>Number Of Something</h4>
                    <XYPlot
                        margin={{ left: 75 }}
                        xType="time"
                        width={500}
                        height={500}
                        yDomain={[yDomain.min, yDomain.max]}
                        title="X"
                    >
                        <VerticalBarSeries className="vertical-bar-series-example" data={barData} />
                        <XAxis title="X" />
                        <YAxis />

                    </XYPlot>
                </center>


            </div>
        );

    }



}

export default Dashboard;