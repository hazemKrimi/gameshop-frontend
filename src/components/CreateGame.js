import React, { useContext, useState } from 'react';
import { MainContext } from '../contexts/MainContext';
import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';

const CreateGame = () => {
    const { addGame } = useContext(MainContext);
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ file, setFile ] = useState(null);

    const add = async() => {
        try {
            await addGame(title, description, file);
        } catch(err) {
            alert(err.msg ? err.msg : 'Cannot add game currently, please try again later');
        }
    };

    return (
        <Jumbotron className="container">
            <Form onSubmit={event => { event.preventDefault(); add(); }}>
                <h2>Create Game</h2>
                <p>Max File Size: 10 MB</p>
                <FormGroup>
                    <Input type="text" placeholder="Title" required value={title} onChange={event => setTitle(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" placeholder="Description" required value={description} onChange={event => setDescription(event.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="file" required onChange={event => setFile(event.target.files[0])} />
                </FormGroup>
                <FormGroup>
                    <Button type='submit'>Create</Button>
                </FormGroup>
            </Form>
        </Jumbotron>
    );
};

export default CreateGame;