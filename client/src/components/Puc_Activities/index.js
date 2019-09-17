import React, { Component } from 'react';
import {
    Container, Col, Row, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

import API from "../../utils/API";
// import Activities from "../Activities/index";
// import { BrowserRouter as Route, Link } from 'react-router-dom';
import '../Puc_Creation';
import notification from '../../assets/images/notification.png';
import './puc_activities.css';



class Puc_Activities extends Component {


    constructor(props) {
        super(props);
        this.state = {
            puc_name: "",
            title: "",
            time_slots: "",
            dow: "",
            checked: false
        };

    }


    //This handles the input changes for the activity name and time slot fields
    handleInputChangeActivities = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    //This handles the form submission for adding Puc activities
    handleFormSubmitPucActivities = event => {
        alert("Great! You've added an activity!");
        event.preventDefault();
        API.postActivities({
            title: this.state.title,
            time_slots: this.state.time_slots,
            dow: this.state.dow
        })
            .then(res => this.postActivities(res))
            .catch(err => console.log(err));

    };


    // handleInputChangeCheckbox = event => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    // }
    // //This handles the click event for the dow checkboxes
    // handleCheckClick = event => {
    //     const
    //     this.setState({ 
    //         [checked]: value
    //     });
    // }

    render() {
        return (
            <Container className="Puc_Activities">
                <img src={notification} id="notification" alt="notification" />
                <h2>Create Activities</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Activity Name</Label>
                            <Input
                                type="activity"
                                name="title"
                                id="activity"
                                placeholder="Feeding"
                                value={this.state.title}
                                onChange={this.handleInputChangeActivities}
                            />
                            <Label>Time Slot</Label>
                            <Input
                                type="time_slot"
                                name="time_slots"
                                id="time_slot"
                                placeholder="Morning"
                                value={this.state.time_slots}
                                onChange={this.handleInputChangeActivities}

                            />
                        </FormGroup>
                        <legend>Day of the Week</legend>
                        {/* <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Sunday
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input name="Monday" type="checkbox" checked={this.state.checked} value={this.state.dow} onChange={this.handleInputChangeActivities} />{' '}
                                Monday
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Tuesday
                             </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Wednesday
                            </Label>
                        </FormGroup> */}


                        <FormGroup check inline>
                            <Label>
                                <Input
                                    type="dow"
                                    name="dow"
                                    id="dow"
                                    placeholder="Monday"
                                    value={this.state.dow}
                                    onChange={this.handleInputChangeActivities}
                                />

                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.handleFormSubmitPucActivities}>Add</Button>
                        </FormGroup>
                    </Col>
                    <Row>
                        <Col xs="6">
                            {/* <Button color="primary" className="px-4">
                                <Link to={'../Activities'}><Route path='../Activities' component={Activities}>Activities Dashboard</Route></Link>


                            </Button> */}
                        </Col>
                    </Row>
                </Form>

            </Container >
        );
    }
}

export default Puc_Activities;