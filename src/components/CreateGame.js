import React from 'react';
import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';

const CreateGame = () => {
    return  (
        <Jumbotron className="container">
            <Form>
                <h2>Create Game</h2>
                <p>Max File Size: 10 MB</p>
                <FormGroup>
                    <Input type="text" name="name" placeholder="Name" required />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="description" placeholder="Description" required />
                </FormGroup>
                <FormGroup>
                    <Input type="file" name="game" id="file" required />
                </FormGroup>
                <FormGroup>
                    <Button>Create</Button>
                </FormGroup>
            </Form>
        </Jumbotron>
    );
};

export default CreateGame;