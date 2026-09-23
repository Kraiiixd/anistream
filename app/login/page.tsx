import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="page-shell auth-shell">
      <div className="auth-card">
        <span className="eyebrow">Anistream</span>
        <h1>Masuk ke akun Anda</h1>
        <p>Login dengan Google untuk akses penuh ke streaming anime, favorit, leaderboard, dan profil.</p>

        <Link href="/api/auth/signin/google" className="button primary large">
          Login dengan Google
        </Link>

        <div className="divider"><span>atau</span></div>

        <div className="mini-box">
          <strong>Developer</strong>
          <p>Email: w mungkin@gmail.com</p>
          <p>Password: anistream@2026</p>
        </div>
      </div>
    </main>
  );
}
