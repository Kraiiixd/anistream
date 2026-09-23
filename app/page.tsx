import Link from "next/link";
import { demoAnime } from "@/lib/data";
import { Badge } from "@/components/Badge";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Navbar />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Anime streaming community</p>
            <h1>Anistream</h1>
            <p className="lead">
              Tonton anime favorit, ikuti leaderboard EXP, kelola profil, dan dapatkan role serta badge khusus.
            </p>
            <div className="hero-actions">
              <Link href="/login" className="button primary">Masuk dengan Google</Link>
              <Link href="/anime/1" className="button secondary">Lihat anime</Link>
            </div>
            <div className="stats-row">
              <div>
                <strong>150K+</strong>
                <span>Pengguna aktif</span>
              </div>
              <div>
                <strong>3.5K+</strong>
                <span>Anime terdaftar</span>
              </div>
              <div>
                <strong>99.9%</strong>
                <span>Uptime</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <p className="mini-label">Trending Now</p>
              <div className="trend-list">
                {demoAnime.slice(0, 3).map((anime) => (
                  <div key={anime.id} className="trend-item">
                    <img src={anime.coverImage} alt={anime.title} />
                    <div>
                      <strong>{anime.title}</strong>
                      <span>{anime.score} / 10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Anime</h2>
            <Link href="/anime/1">Lihat Semua</Link>
          </div>

          <div className="anime-grid">
            {demoAnime.map((anime) => (
              <div key={anime.id} className="anime-card">
                <img src={anime.coverImage} alt={anime.title} />
                <div className="anime-card-body">
                  <div className="anime-meta">
                    <span>{anime.status}</span>
                    <span>{anime.episodes} eps</span>
                  </div>
                  <h3>{anime.title}</h3>
                  <div className="genre-row">
                    {anime.genres.map((genre) => (
                      <Badge key={genre} label={genre} color="#3b82f6" />
                    ))}
                  </div>
                  <p>{anime.synopsis}</p>
                  <div className="card-footer">
                    <strong>{anime.score}</strong>
                    <Link href={`/watch/${anime.id}`}>Watch</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
