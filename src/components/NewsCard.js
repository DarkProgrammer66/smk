import { Card, Button } from "react-bootstrap";

function NewsCard({ image, title, text }) {
  return (
    <Card className="shadow mb-4">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href="/news">Baca Selengkapnya</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
