import { Nav, Navbar } from 'react-bootstrap';
import React from "react";

function Header({loggedIn}) {
    
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Welcome</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>                    
                <Nav.Link href="/login">Login</Nav.Link>
                {loggedIn && (
                <React.Fragment>
                    <Nav.Link href="/add-course">Add course</Nav.Link>
                </React.Fragment>
            )}
            </Nav>
        </Navbar>
    </>
    )
    
}

export default Header;