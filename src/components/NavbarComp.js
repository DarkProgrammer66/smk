import {
  Navbar,
  Nav,
  Container,
  
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComp() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/images/logotbb.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SMK TARUNA BUDI BANGSA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="/about">Profil</Nav.Link>
            <Nav.Link href="/news">Berita</Nav.Link>
            <Nav.Link href="/gallery">Galeri</Nav.Link>
            <Nav.Link href="/contact">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
