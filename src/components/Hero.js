import { Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-light text-center p-5">
      <h1>Selamat Datang di Website Sekolah</h1>
      <p className="lead">Tempat informasi resmi kegiatan & pengumuman sekolah.</p>
      <Button variant="primary" href="/about">
        Lihat Profil Sekolah
      </Button>
    </div>
  );
}

export default Hero;
