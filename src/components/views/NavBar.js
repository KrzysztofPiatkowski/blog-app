import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
 
function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
      <Container>
        <Navbar.Brand href="/">MyBlog</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
