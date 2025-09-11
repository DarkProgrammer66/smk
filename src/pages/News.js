import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";

function News() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Berita & Pengumuman</h2>

      <Card className="mb-3">
        <Card.Img
          variant="top"
          src="/images/news/paskibra1.jpg"
          style={{ height: "60vh", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>TIM PASKIBRA</Card.Title>
          <Card.Text>
            Salam hormat untuk Tim Paskibra! Tegap langkahmu, tinggi
            pengabdianmu, dan semangatmu menjadi teladan bagi kita semua.
            Penghargaan ini untuk kalian!
          </Card.Text>
          <Button variant="link">Baca Selengkapnya</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Img
            variant="top"
            src="/images/news/futsal1.jpg"
            style={{ height: "60vh", objectFit: "cover" }}
          />
          <Card.Title>Eskul Futsal</Card.Title>
          <Card.Text>
            Prestasi Membanggakan! Selamat kepada tim futsal SMK Taruna Budi
            Bangsa yang berhasil meraih Juara 3 dalam Turnamen Futsal Pesta
            Pelajar tingkat Kabupaten Bogor. Pertandingan digelar di Lapangan
            Futsal Poncol, Cilebut pada Minggu, 07 September 2025, dengan
            komposisi pemain dari kelas X dan XI.
          </Card.Text>
          <Button variant="link">Baca Selengkapnya</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Img
            variant="top"
            src="/images/news/upacara2.jpg"
            style={{ height: "60vh", objectFit: "cover" }}
          />
          <Card.Title>Hari Kemerdekaan</Card.Title>
          <Card.Text>
            SMK Taruna Budi Bangsa memperingati Hari Kemerdekaan Republik
            Indonesia ke-80 dengan penuh khidmat melalui upacara bendera. Mari
            terus menjaga semangat perjuangan dan mengisi kemerdekaan dengan
            karya dan prestasi! ✨
          </Card.Text>
          <Button variant="link">Baca Selengkapnya</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default News;
