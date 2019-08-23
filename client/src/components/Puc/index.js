import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import API from "../../utils/API";


class Puc extends Component {

    state = {
        puc_name: "",
        title: "",
        time_slots: "",
        dow: ""
    };

    //This handles the input change for the Puc input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //This handles the form submission for adding a Puc
    handleFormSubmitPuc = event => {
        event.preventDefault();
        API.createPuc({
            puc_name: this.state.puc_name
        })
            .then(res => this.createPuc(res))
            .catch(err => console.log(err));

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
                <h2>Manage Person Under Care</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                name="puc_name"
                                id="Puc_name"
                                value={this.state.puc_name}
                                onChange={this.handleInputChange}
                            />
                            <Button id="add_Puc" onClick={this.handleFormSubmitPuc}>Add</Button>
                        </FormGroup>
                    </Col>
                </Form>
                <br />
                <h2>Create Activities for: insert Puc name</h2>
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
                            <legend>Day of the Week</legend>

                            <Label check>
                                <Input
                                    type="dow"
                                    name="dow"
                                    id="dow"
                                    value={this.state.dow}
                                    onChange={this.handleInputChangeActivities}
                                />
                            </Label>


                            <Button id="add_Puc" onClick={this.handleFormSubmitPucActivities}>Add</Button>
                        </FormGroup>
                    </Col>
                </Form>

            </Container>
        );
    }
}

export default Puc;