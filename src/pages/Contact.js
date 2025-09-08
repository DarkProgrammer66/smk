import { Navbar, Nav, Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Contact() {
return (
<Container className="my-5">
<h2 className="mb-4">Kontak Kami</h2>
<Row>
<Col md={6}>
<Form>
<Form.Group className="mb-3">
<Form.Label>Nama</Form.Label>
<Form.Control type="text" placeholder="Masukkan nama" />
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Email</Form.Label>
<Form.Control type="email" placeholder="Masukkan email" />
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Pesan</Form.Label>
<Form.Control as="textarea" rows={3} placeholder="Tulis pesan Anda" />
</Form.Group>
<Button variant="primary" type="submit">Kirim</Button>
</Form>
</Col>
<Col md={6}>
<h5>Alamat</h5>
<p>Jl. Pendidikan No. 123, Kota Contoh</p>
<h5>Telepon</h5>
<p>(021) 123456</p>
<h5>Email</h5>
<p>info@sdnegericontoh.sch.id</p>
</Col>
</Row>
</Container>
);
}

export default Contact;