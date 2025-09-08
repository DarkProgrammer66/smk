import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComp() {
return (
<Navbar bg="primary" variant="dark" expand="lg">
<Container>
<Navbar.Brand href="/">SD Negeri Contoh</Navbar.Brand>
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