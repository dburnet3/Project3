import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

import API from "../../utils/API";


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
            <Container className="App">
                <h2>Create Activities for: 'insert Puc name'</h2>
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
                </Form>

            </Container >
        );
    }
}

export default Puc_Activities;