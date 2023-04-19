import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar >
      <Container>
        <Navbar.Brand href="/" className="fw-bold">MyCaracter</Navbar.Brand>
        <Nav>
          <Nav.Link href="#op" className="fw-bold">One Piece</Nav.Link>
          <Nav.Link href="#tensura" className="fw-bold">Tensura</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
