import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-light text-center p-5">
        <h1>Selamat Datang di Website Sekolah</h1>
        <p className="lead">Tempat informasi resmi kegiatan & pengumuman sekolah.</p>
        <Button variant="primary" href="/about">Lihat Profil Sekolah</Button>
      </div>

      {/* Berita Terbaru */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Berita Terbaru</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="images/event1.jpg" />
              <Card.Body>
                <Card.Title>Kegiatan Upacara</Card.Title>
                <Card.Text>Upacara bendera dilaksanakan setiap Senin dengan khidmat.</Card.Text>
                <Button variant="primary" href="/news">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="images/event2.jpg" />
              <Card.Body>
                <Card.Title>Lomba Sains</Card.Title>
                <Card.Text>Siswa meraih juara lomba sains tingkat kota.</Card.Text>
                <Button variant="primary" href="/news">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="images/event3.jpg" />
              <Card.Body>
                <Card.Title>Kegiatan Pramuka</Card.Title>
                <Card.Text>Pramuka melatih kedisiplinan dan kebersamaan siswa.</Card.Text>
                <Button variant="primary" href="/news">Baca Selengkapnya</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
