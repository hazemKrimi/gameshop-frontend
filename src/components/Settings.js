import React, { useContext, useState } from 'react';
import { MainContext } from '../contexts/MainContext';
import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const Settings = () => {
    const { user, updateUser, deleteUser } = useContext(MainContext);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const update = async () => {
        try {
            await updateUser(name, email, password);
        } catch (err) {
            alert(err.msg ? err.msg : 'Cannot update currently, please try again later');
        }
    };

    const del = async() => {
        try {
            await deleteUser();
        } catch (err) {
            alert(err.msg ? err.msg : 'Cannot delete currently, Please try again later');
        }
    };

    return user ? (
        <Jumbotron className="container">
            <h1>Account Settings for <b>{user.name}</b>:</h1>
            <Form onSubmit={event => { event.preventDefault(); update(); }}>
                <h2>Update Account</h2>
                <p>To change a credential enter a new one, else leave it empty (Always fill the username for Confirmation)</p>
                <FormGroup>
                    <Input type="text" name="username" placeholder="New Username" required value={name} onChange={event => setName(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" placeholder="New Email" required value={email} onChange={event => setEmail(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="New Password" required value={password} onChange={event => setPassword(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button type='submit'>Update</Button>
                </FormGroup>
            </Form>
            <Form>
                <h2>Delete Account</h2>
                <p>If you proceed you cannot recover your account</p>
                <Button color='danger' onClick={event => { event.preventDefault(); del(); } }>Delete</Button>
            </Form>
        </Jumbotron>
    ) : (
        <Redirect to='/login' />
    )
};

export default Settings;