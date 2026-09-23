# Anistream

Anistream adalah starter website streaming anime dengan fitur komunitas, panel admin, role & badge, login Google, dan integrasi API anime publik.

## Fitur utama

- Login Google
- Logout
- Profil user dengan `#1`, `#2`, dst.
- EXP, level, leaderboard
- Role: member, beta tester, moderator, admin, developer
- Verifikasi badge dengan warna:
  - Developer: hijau
  - Admin: merah
  - Moderator: ungu
  - Beta tester: kuning
  - Member: biru
- Riwayat nonton
- Favorit anime
- Search anime
- Tanggal rilis
- Notification / notifikasi
- Jadwal rilis
- Subscribed
- Anime completed
- Komentar
- Movie update
- New anime update
- Panel admin
- Developer dapat memberikan role ke user
- Admin dapat ban user, manage anime, edit level, pengumuman, hapus komentar

## Tech stack

- Next.js 14
- TypeScript
- Prisma
- PostgreSQL
- NextAuth (Google OAuth)
- Jikan anime public API

## Persiapan cepat

1. Install dependency:

```bash
npm install
```

2. Salin file environment:

```bash
cp .env.example .env
```

3. Isi `DATABASE_URL`, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`.

4. Jalankan migrasi Prisma:

```bash
npx prisma migrate dev --name init
```

5. Jalankan server:

```bash
npm run dev
```

## Developer default

Email developer default:

```text
wmungkin@gmail.com
```

Password default:

```text
anistream@2026
```

Catatan: sesuaikan dan ubah credential ini di file `.env` atau saat setup user pertama di database.

## Repo

- https://github.com/Kraiiixd/anistream
