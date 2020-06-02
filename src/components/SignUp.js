import React from 'react';
import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';

const SignUp = () => {
    return (
        <Jumbotron className="container">
            <Form>
                <h2>Sign Up</h2>
                <FormGroup>
                    <Input type="text" name="username" placeholder="Username" required />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Email" required />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="Password" required />
                </FormGroup>
                <FormGroup>
                    <Button>Sign Up</Button>
                </FormGroup>
            </Form>
        </Jumbotron>
    );
};

export default SignUp;