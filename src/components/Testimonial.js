import { Container, Row, Col, Card } from "react-bootstrap";

function Testimonial() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Testimoni Alumni & Orang Tua</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow p-3 mb-4">
            <Card.Body>
              <Card.Text>
                “Saya sangat bangga pernah bersekolah di sini. Guru-gurunya
                sabar dan mendidik dengan penuh perhatian.”
              </Card.Text>
              <h6 className="text-primary">– Andi, Alumni 2018</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3 mb-4">
            <Card.Body>
              <Card.Text>
                “Anak saya berkembang pesat sejak masuk sekolah ini.
                Lingkungannya aman dan mendukung.”
              </Card.Text>
              <h6 className="text-primary">– Ibu Sari, Orang Tua Murid</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3 mb-4">
            <Card.Body>
              <Card.Text>
                “Sekolah ini tidak hanya fokus pada akademik, tapi juga karakter
                siswa. Sangat bermanfaat untuk masa depan.”
              </Card.Text>
              <h6 className="text-primary">– Budi, Alumni 2020</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonial;
