import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MainNav = () => {
    const [isOpen, toggle] = useState(false);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">GameShop</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/create-game">Create</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/settings">Hik0o</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Logout</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/signup/">Sign Up</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default MainNav;