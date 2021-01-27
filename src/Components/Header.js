import { Nav, Navbar } from 'react-bootstrap';

function Header({loggedIn}) {
    
    return (
        loggedIn ?
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Welcome</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>                    
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/courses">Courses</Nav.Link>
            </Nav>
        </Navbar>
    </>
    :
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Welcome</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>                    
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
    
}

export default Header;