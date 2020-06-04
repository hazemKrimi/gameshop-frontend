import React, { useContext, useState } from 'react';
import { MainContext } from '../contexts/MainContext';
import { Jumbotron, Form, FormGroup, Input, Button, Row, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
    const { user, logIn } = useContext(MainContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const log = async() => {
        try {
            await logIn(email, password);
        } catch(err) {
            alert(err.msg ? err.msg : 'Cannot log in, please check your credentials or try again later');
        }
    };

    return !user ? (
        <Jumbotron className="container">
            <Form onSubmit={event => { event.preventDefault(); log(); }}>
                <h2>Login</h2>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Email" required value={email} onChange={event => setEmail(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="Password" required value={password} onChange={event => setPassword(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col xs="6">
                            <Button type='submit'>Login</Button>
                        </Col>
                        <Col xs="6">
                            <p style={{ textAlign: "right" }}>
                                Don't have an Account? <Link style={{ color: "#007bff" }} to="/signup">Sign Up</Link>
                            </p>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        </Jumbotron>
    ) : (
        <Redirect to='/home' />
    );
};

export default Login;