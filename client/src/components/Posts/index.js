import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, ListGroup, ListGroupItem, Jumbotron
} from 'reactstrap';
import API from "../../utils/API";
import discussion from '../../assets/images/discuss-issue.png';
import './posts.css';




class Posts extends Component {

    state = {
        result: [],
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

    // loadPosts = event => {
    //     API.getPost()
    //         .then(res => this.setState({ post: res.data, post_title: "", post_body: "" })
    //         )
    //         .catch(err => console.log(err));
    // };

    //When the component mounts, it will search for all of the posts in the db
    componentDidMount() {
        this.displayPosts();
    }

    displayPosts = query => {
        API.getPost(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container className="Posts">
                <img src={discussion} alt="discussion" />
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
                            <Jumbotron>
                                <h1>Discussion Board</h1>
                            </Jumbotron>
                            {this.state.result.length ? (
                                <ListGroup>
                                    {this.state.result.map(result => (
                                        <ListGroupItem key={result._id}>
                                            <strong>
                                                Title:
                                            </strong>
                                            <p> {result.post_title}</p>
                                            <br />
                                            <strong>
                                                Message:
                                            </strong>
                                            <p>{result.post_body}</p>


                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}

                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default Posts;