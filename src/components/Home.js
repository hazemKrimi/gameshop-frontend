import React, { useState } from 'react';
import { Jumbotron, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Home = () => {
    const [games, setGames] = useState([
        { id: 1, name: 'GTA 5', developer: 'Rockstar Games' },
        { id: 2, name: 'Minecraft', developer: 'Mojang' },
        { id: 3, name: 'MGSV', developer: 'Kojima Productions' },
    ]);

    return (
        <Jumbotron className="container">
            {games[0] ? <h1>Games:</h1> : <h1>No Games Found</h1>}
            {games && games.map(game => (
                <Row key={game.id} className="my-2">
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h3>Title: {game.name}</h3>
                                </CardTitle>
                                <CardSubtitle>Developer: {game.developer}</CardSubtitle>
                                <div className="mt-2">
                                    <Button>
                                        <a href='#' target="_blank" rel="noopener noreferrer">Download</a>
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Jumbotron>
    );
};

export default Home;