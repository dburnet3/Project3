import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class Puc extends Component {
    render() {
        return (
            <Container className="App">
                <h2>Manage Person Under Care</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type="Puc_name"
                                name="Puc_name"
                                id="Puc_name"
                            />
                            <Button id="add_Puc">Add</Button>
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
                                name="activity"
                                id="activity"
                                placeholder="Feeding"
                            />
                            <Label>Time Slot</Label>
                            <Input
                                type="time_slot"
                                name="time_slot"
                                id="time_slot"
                                placeholder="Morning"
                            />
                            <Button id="add_Puc">Add</Button>
                        </FormGroup>
                    </Col>
                </Form>

            </Container>
        );
    }
}

export default Puc;