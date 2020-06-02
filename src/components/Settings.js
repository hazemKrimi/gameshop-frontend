import React from 'react';
import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';

const Settings = () => {
    return (
        <Jumbotron className="container">
            <h1>Account Settings for <b>Hik0o</b>:</h1>
            <Form>
                <h2>Update Account</h2>
                <p>To change a credential enter a new one, else leave it empty (Always fill the username for Confirmation)</p>
                <FormGroup>
                    <Input type="text" name="username" placeholder="New Username" required />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" placeholder="New Email" required />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="New Password" required />
                </FormGroup>
                <FormGroup>
                    <Button>Update</Button>
                </FormGroup>
            </Form>
            <Form>
                <h2>Delete Account</h2>
                <p>If you proceed you cannot recover your account</p>
                <Button>Delete</Button>
            </Form>
        </Jumbotron>
    );
};

export default Settings;