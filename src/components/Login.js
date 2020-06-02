import React from 'react';
import { Jumbotron, Form, FormGroup, Input, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Jumbotron className="container">
            <Form>
                <h2>Login</h2>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Email" required />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="Password" required />
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col xs="6">
                            <Button>Login</Button>
                        </Col>
                        <Col xs="6">
                            <p style={{ textAlign: "right" }}>
                                Don't have an Account? <Link style={{ color: "#007bff"}} to="/signup">Sign Up</Link>
                            </p>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        </Jumbotron>
    );
};

export default Login;