import Link from "next/link";
import { demoAnime } from "@/lib/data";

export default function WatchPage({ params }: { params: { id: string } }) {
  const anime = demoAnime.find((item) => item.id === Number(params.id));

  if (!anime) {
    return <main className="page-shell"><div className="container"><h1>Anime tidak ditemukan</h1></div></main>;
  }

  return (
    <main className="page-shell">
      <div className="container watch-layout">
        <section className="watch-player">
          <div className="video-box">
            <video controls poster={anime.coverImage} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
          </div>
          <div className="watch-header">
            <h1>{anime.title}</h1>
            <Link href={`/anime/${anime.id}`} className="button secondary">Detail</Link>
          </div>
        </section>

        <aside className="panel-card comment-box">
          <h3>Komentar</h3>
          <ul className="simple-list">
            <li>AnimeNoxa: kualitas visualnya keren banget.</li>
            <li>Renji: soundtrack-nya sangat cocok!</li>
            <li>Wahyu: episode berikutnya pasti lebih intens.</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
