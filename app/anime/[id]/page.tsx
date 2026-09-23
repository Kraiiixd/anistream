import { notFound } from "next/navigation";
import Link from "next/link";
import { demoAnime } from "@/lib/data";

export default function AnimeDetailPage({ params }: { params: { id: string } }) {
  const anime = demoAnime.find((item) => item.id === Number(params.id));

  if (!anime) {
    notFound();
  }

  return (
    <main className="page-shell">
      <div className="container detail-page">
        <div className="detail-cover">
          <img src={anime.coverImage} alt={anime.title} />
        </div>

        <div className="detail-content">
          <p className="eyebrow">{anime.status}</p>
          <h1>{anime.title}</h1>
          <div className="detail-meta">
            <span>Score: {anime.score}</span>
            <span>Episodes: {anime.episodes}</span>
            <span>Release: {anime.releaseDate}</span>
          </div>
          <p>{anime.synopsis}</p>

          <div className="genre-row">
            {anime.genres.map((genre) => (
              <span key={genre} className="genre-pill">{genre}</span>
            ))}
          </div>

          <div className="hero-actions">
            <Link href={`/watch/${anime.id}`} className="button primary">Tonton Sekarang</Link>
            <Link href="/" className="button secondary">Kembali</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
