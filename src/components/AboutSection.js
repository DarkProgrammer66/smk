import { Container } from "react-bootstrap";

function AboutSection() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Profil Sekolah</h2>
      <p><strong>Visi:</strong> Mencetak generasi yang beriman, berilmu, dan berkarakter.</p>
      <p><strong>Misi:</strong></p>
      <ul>
        <li>Menyelenggarakan pendidikan berkualitas.</li>
        <li>Mengembangkan potensi siswa secara optimal.</li>
        <li>Mewujudkan lingkungan belajar yang aman dan nyaman.</li>
      </ul>
      <p>Sejarah singkat sekolah dapat dituliskan di sini...</p>
    </Container>
  );
}

export default AboutSection;
