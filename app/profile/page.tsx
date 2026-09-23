import Link from "next/link";
import { Badge } from "@/components/Badge";

export default function ProfilePage() {
  return (
    <main className="page-shell">
      <div className="container profile-layout">
        <aside className="sidebar-box">
          <div className="avatar-circle">A</div>
          <h2>AnimeNoxa</h2>
          <p>ID akun: #1</p>
          <Badge label="Developer" color="#22c55e" />
          <ul className="profile-list">
            <li>EXP: 15240</li>
            <li>Level: 28</li>
            <li>Completed: 128</li>
            <li>Last watched: Frieren</li>
          </ul>
          <Link href="/" className="button secondary">Kembali</Link>
        </aside>

        <section className="main-panel">
          <div className="panel-card">
            <h3>Statistik</h3>
            <div className="stats-grid">
              <div><strong>87</strong><span>Favorit</span></div>
              <div><strong>24</strong><span>Rilis baru</span></div>
              <div><strong>12</strong><span>Subscribed</span></div>
              <div><strong>8</strong><span>Notifikasi</span></div>
            </div>
          </div>

          <div className="panel-card">
            <h3>Riwayat Nonton</h3>
            <ul className="simple-list">
              <li>Solo Leveling - 2 jam lalu</li>
              <li>Frieren - 1 hari lalu</li>
              <li>Attack on Titan - 3 hari lalu</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
