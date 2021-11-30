import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Outlet } from 'react-router';
import "./mainNavbar.css"

const mapStateToProps = (state) => {
    return state
}

const MainNavbar = (props) => {
    console.log(props.activeUser)
    return(
        <React.Fragment>
            <Navbar className="main-navbar"  expand="lg" variant="light">
                <Container className="mw-100">
                    <Navbar.Brand href="/">HOA Systems</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/main/dashboard">Dashboard</Nav.Link>
                            {(props.activeUser.activeUser.isCommitteeMember) ? 
                            <Nav.Link href="/main/tenants">Tenants</Nav.Link> : null}
                            <Nav.Link href="/main/messages">Messages</Nav.Link>
                            <Nav.Link href="/main/issues">Issues</Nav.Link>
                            <Nav.Link href="/main/voting">Voting</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end flex-grow-1">
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