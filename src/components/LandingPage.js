import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';
import { Jumbotron, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

const LandingPage = () => {
    const { user } = useContext(MainContext);

    return !user ? (
        <Jumbotron className="container text-center">
            <h2>Welcome to the place where Gamers and Game Developers meet</h2>
            <p>GameShop is a platform where Gamers and Game Developers share their games</p>
            <div className="mt-2">
                <Button className="btn-block m-auto" style={{ width: "50%", fontWeight: "bold" }}>
                    <Link to="/signup">Get Started</Link>
                </Button>
            </div>
        </Jumbotron>
    ) : (
        <Redirect to='/home' />
    );
};

export default LandingPage;