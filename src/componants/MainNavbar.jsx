import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Outlet } from 'react-router';

const mapStateToProps = (state) => {
    return state
}

const MainNavbar = (props) => {
    console.log(props.activeUser)
    return(
        <React.Fragment>
            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="/">HOA Systems</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/main-dashboard">Dashboard</Nav.Link>
                            {(props.activeUser.activeUser.isCommitteeMember) ? 
                            <Nav.Link href="/tenants">Tenants</Nav.Link> : null}
                            <Nav.Link href="/messages">Messages</Nav.Link>
                            <Nav.Link href="/issues">Issues</Nav.Link>
                            <Nav.Link href="/voting">Voting</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </React.Fragment>
    )
}

export default connect(mapStateToProps,null)(MainNavbar);