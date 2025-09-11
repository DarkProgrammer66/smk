import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

function Home() {
  return (
    <>
      {/* PPDB */}

      <div className="bg-warning text-center p-4">
        <h2>Penerimaan Peserta Didik Baru (PPDB) 2025</h2>
        <p>Pendaftaran dibuka dari 1 Mei – 30 Juni 2025.</p>
        <Button variant="primary" href="/ppdb">
          Daftar Sekarang
        </Button>
      </div>

      {/* Berita Terbaru */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Berita Terbaru</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="/images/news/paskibra1.jpg" />
              <Card.Body>
                <Card.Title>TIM PASKIBRA</Card.Title>
                <Card.Text>
                  Salam hormat untuk Tim Paskibra! Tegap langkahmu, tinggi
                  pengabdianmu, dan semangatmu menjadi teladan bagi kita semua.
                  Penghargaan ini untuk kalian!
                </Card.Text>
                <Button variant="primary" href="/news">
                  Baca Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="/images/news/futsal1.jpg" />
              <Card.Body>
                <Card.Title>Eskul Futsal</Card.Title>
                <Card.Text>
                  Prestasi Membanggakan! Selamat kepada tim futsal SMK Taruna
                  Budi Bangsa yang berhasil meraih Juara 3 dalam Turnamen Futsal
                  Pesta Pelajar tingkat Kabupaten Bogor. Pertandingan digelar di
                  Lapangan Futsal Poncol, Cilebut pada Minggu, 07 September
                  2025, dengan komposisi pemain dari kelas X dan XI.
                </Card.Text>
                <Button variant="primary" href="/news">
                  Baca Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="/images/news/upacara2.jpg" />
              <Card.Body>
                <Card.Title>Kemerdekaan</Card.Title>
                <Card.Text>
                  SMK Taruna Budi Bangsa memperingati Hari Kemerdekaan Republik
                  Indonesia ke-80 dengan penuh khidmat melalui upacara bendera.
                  Mari terus menjaga semangat perjuangan dan mengisi kemerdekaan
                  dengan karya dan prestasi! ✨
                </Card.Text>
                <Button variant="primary" href="/news">
                  Baca Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Testimonial />
    </>
  );
}

export default Home;
