import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import API from "../../utils/API";
import './puc_creation.css';
import user from '../../assets/images/user.png';

class Puc_Creation extends Component {

    state = {
        puc_name: "",
        title: "",
        time_slots: "",
        dow: ""
    };

    // //Loads the Puc name and sets it to the state
    // createPuc = () => {
    //     API.createPuc()
    //         .then(res =>
    //             this.setState({ puc_name: "" })
    //         )
    //         .catch(err => console.log(err));
    // };


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


    render() {
        return (
            <Container className="App">
                <img src={user} alt="user" id="user" />
                <br />
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
                            <br />
                            <Button id="add_Puc" onClick={this.handleFormSubmitPuc}>Add</Button>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default Puc_Creation;