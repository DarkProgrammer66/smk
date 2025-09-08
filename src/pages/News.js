import { Navbar, Nav, Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function News() {
return (
<Container className="my-5">
<h2 className="mb-4">Berita & Pengumuman</h2>
{[1, 2, 3, 4].map((item) => (
<Card className="mb-3" key={item}>
<Card.Body>
<Card.Title>Berita {item}</Card.Title>
<Card.Text>
Ini adalah isi singkat dari berita {item}. Klik selengkapnya untuk detail.
</Card.Text>
<Button variant="link">Baca Selengkapnya</Button>
</Card.Body>
</Card>
))}
</Container>
);
}

export default News;