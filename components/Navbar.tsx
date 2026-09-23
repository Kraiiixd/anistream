import Link from "next/link";

export function Navbar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand">Anistream</Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/anime/1">Anime</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}
