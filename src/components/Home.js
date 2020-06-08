import React, { useContext, useEffect } from 'react';
import { MainContext } from '../contexts/MainContext';
import { Jumbotron, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const Home = () => {
    const { user, games, getGames, deleteGame } = useContext(MainContext);

    const del = async(id) => {
        try {
            await deleteGame(id);
        } catch (err) {
            alert(err.msg ? err.msg : 'Cannot get games currently, please try again later');
        }
    };

    useEffect(() => {
        (async () => {
            try {
                await getGames();
            } catch(err) {
                console.error(err);
            }
        })();
    });

    return user ? (
        <Jumbotron className="container">
            {games && games[0] ? <h1>Games:</h1> : <h1>No Games Found</h1>}
            {games && games.map(game => (
                <Row key={game._id} className="my-2">
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h3>Title: { game.title }</h3>
                                </CardTitle>
                                <CardSubtitle>Desciption: { game.description }</CardSubtitle>
                                <CardSubtitle>Developer: { game.name }</CardSubtitle>
                                <div className="mt-2">
                                    <Button>
                                        <a href={`${process.env.REACT_APP_SERVER}/game/download/${game.file_name}`} rel="noopener noreferrer">Download</a>
                                    </Button>
                                </div>
                                { user.id === game.user_id && 
                                    <div className="mt-2">
                                        <Button color='danger' onClick={() => del(game._id)}>Delete</Button>
                                    </div>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Jumbotron>
    ) : (
        <Redirect to='/login' />
    );
};

export default Home;
