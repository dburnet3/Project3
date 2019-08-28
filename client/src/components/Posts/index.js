import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Table
} from 'reactstrap';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import API from "../../utils/API";




class Posts extends Component {

    state = {
        post_title: "",
        post_body: ""

    };

    //This handles the input change for the Puc input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //This handles the form submission for adding a Puc
    handleFormSubmit = event => {
        event.preventDefault();
        API.createPost({
            post_title: this.state.post_title,
            post_body: this.state.post_body
        })
            .then(res => this.createPost(res))
            .catch(err => console.log(err));

    };

    loadPosts = event => {
        API.getPost()
            .then(res => this.setState({ post: res.data, post_title: "", post_body: "" })
            )
            .catch(err => console.log(err));
    };



    render() {
        return (
            <Container className="App">
                <h2>Share your thoughts!</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Title:</Label>
                            <Input

                                name="post_title"
                                value={this.state.post_title}
                                onChange={this.handleInputChange}
                            />
                            <br />
                            <Label>Post:</Label>
                            <Input
                                type="textarea"
                                name="post_body"
                                value={this.state.post_body}
                                onChange={this.handleInputChange}
                            />
                            <br />
                            <Button onClick={this.handleFormSubmit}>Add</Button>
                        </FormGroup>
                        <br />
                        <br />
                        <FormGroup>
                            <Table borderless>
                                <thead>
                                    <tr>
                                        <th>Discussion Board</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Recent Posts</th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default Posts;