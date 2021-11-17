import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

function Homepage (){
    return (
        <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/#/">HOA Systems</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/member-signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="hompage-img">
                    <img src="https://i.ytimg.com/vi/Ya69WuHcq8M/maxresdefault.jpg"/>
                </div>
        </React.Fragment>
    )
}

export default Homepage