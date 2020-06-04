import React, { useContext, useState } from 'react';
import { MainContext } from '../contexts/MainContext';
import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const SignUp = () => {
    const { user, signUp } = useContext(MainContext);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const sign = async() => {
        try {
            await signUp(name, email, password);
        } catch(err) {
            alert(err.msg ? err.msg : 'Cannot sign up currently, please try again later');
        }
    };

    return !user ? (
        <Jumbotron className="container">
            <Form onSubmit={event => { event.preventDefault(); sign(); }}>
                <h2>Sign Up</h2>
                <FormGroup>
                    <Input type="text" placeholder="Username" required value={name} onChange={event => setName(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="email" placeholder="Email" required value={email} onChange={event => setEmail(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" placeholder="Password" required value={password} onChange={event => setPassword(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button type='submit'>Sign Up</Button>
                </FormGroup>
            </Form>
        </Jumbotron>
    ) : (
        <Redirect to='/home' />
    );
};

export default SignUp;