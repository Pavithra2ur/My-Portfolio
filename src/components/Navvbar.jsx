import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navvbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" data-bs-theme="light" className="justify-content-center">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home" className="text-dark fw-bold" style={{color:"purple"}}>
          My-Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav className="text-dark">
            <Nav.Link href="#Home" className="text-dark me-5 fw-bold">Home</Nav.Link>
            <Nav.Link href="#About" className="text-dark me-5 fw-bold">About Me</Nav.Link>
            <Nav.Link href="#Skills" className="text-dark me-5 fw-bold">Skills</Nav.Link>
            <Nav.Link href="#Projects" className="text-dark me-5 fw-bold">Projects</Nav.Link>
            <Nav.Link href="#Contact" className="text-dark fw-bold">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navvbar;
