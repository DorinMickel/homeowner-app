import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './homepage.css'

const HomepageNavbar = () => {
    return (
        <div>
        <Navbar className="hp-navbar"  expand="lg">
            <Container className="mw-100">
            <Navbar.Brand href="/">HOA Systems</Navbar.Brand>
                <Nav className="">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/member-signup">Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    
    </div>
    )
}

export default HomepageNavbar
