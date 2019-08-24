import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import API from "../../utils/API";


class Puc_Activities extends Component {

    state = {
        puc_name: "",
        title: "",
        time_slots: "",
        dow: ""
    };

    //This handles the input changes for the activity name and time slot fields
    handleInputChangeActivities = event => {
        const { name, value } = event.target;
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