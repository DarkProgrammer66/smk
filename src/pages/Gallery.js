import { Navbar, Nav, Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Gallery() {
return (
<Container className="my-5">
<h2 className="mb-4 text-center">Galeri Kegiatan</h2>
<Row>
{[1, 2, 3, 4, 5, 6, 7].map((item) => (
<Col md={4} sm={6} xs={12} className="mb-4" key={item}>
<Card className="shadow">
<Card.Img variant="top" src={`images/gallery${item}.jpg`} alt={`Galeri ${item}`} />
</Card>
</Col>
))}
</Row>
</Container>
);
}

export default Gallery;