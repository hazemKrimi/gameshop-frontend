import React, { useState, useContext } from 'react';
import { MainContext } from '../contexts/MainContext';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav as NavComponent, NavItem, NavLink } from 'reactstrap';

const Nav = () => {
    const [ isOpen, toggle ] = useState(false);
    const { user, logOut } = useContext(MainContext);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">GameShop</NavbarBrand>
            <NavbarToggler onClick={() => toggle(prevState => !prevState)} />
            <Collapse isOpen={isOpen} navbar>
                { user ? (
                    <NavComponent className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/create-game">Create</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/settings">Settings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => logOut()}>Logout</NavLink>
                        </NavItem>
                    </NavComponent>
                ) : (
                    <NavComponent className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup/">Sign Up</NavLink>
                        </NavItem>
                    </NavComponent>
                ) }
            </Collapse>
        </Navbar>
    );
};

export default Nav;