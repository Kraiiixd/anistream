export type AnimeSummary = {
  id: number;
  title: string;
  slug: string;
  coverImage: string;
  genres: string[];
  releaseDate: string;
  status: "ONGOING" | "COMPLETED" | "UPCOMING" | "HIATUS";
  score: number;
  episodes: number;
  synopsis: string;
};

export const demoAnime: AnimeSummary[] = [
  {
    id: 1,
    title: "Solo Leveling",
    slug: "solo-leveling",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    genres: ["Action", "Fantasy", "Adventure"],
    releaseDate: "2024-01-06",
    status: "ONGOING",
    score: 8.9,
    episodes: 12,
    synopsis: "A weak hunter gets a second chance after a mysterious system awakens inside him.",
  },
  {
    id: 2,
    title: "Attack on Titan Final Season",
    slug: "attack-on-titan-final-season",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    genres: ["Action", "Drama", "Dark Fantasy"],
    releaseDate: "2023-11-04",
    status: "COMPLETED",
    score: 9.5,
    episodes: 16,
    synopsis: "Humanity is forced to survive in a world dominated by monstrous giants and impossible choices.",
  },
  {
    id: 3,
    title: "Frieren: Beyond Journey's End",
    slug: "frieren-beyond-journeys-end",
    coverImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
    genres: ["Adventure", "Fantasy"],
    releaseDate: "2023-09-29",
    status: "COMPLETED",
    score: 9.2,
    episodes: 28,
    synopsis: "An elf mage reflects on the memories of an epic journey and the passage of time after the war ends.",
  },
  {
    id: 4,
    title: "Dandadan",
    slug: "dandadan",
    coverImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80",
    genres: ["Comedy", "Supernatural"],
    releaseDate: "2024-10-03",
    status: "UPCOMING",
    score: 8.7,
    episodes: 12,
    synopsis: "Two students with chaotic energy discover that the supernatural is far more dangerous than expected.",
  },
];

export async function searchAnimePublic(query: string) {
  const normalized = query.trim();
  if (!normalized) {
    return demoAnime;
  }

  const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(normalized)}&limit=6`;

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      return demoAnime;
    }

    const data = await response.json();
    return (data.data || demoAnime).map((anime: any) => ({
      id: anime.mal_id,
      title: anime.title,
      slug: anime.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      coverImage: anime.images?.jpg?.large_image_url || "https://placehold.co/800x1200/0f172a/ffffff?text=Anistream",
      genres: (anime.genres || []).map((genre: any) => genre.name),
      releaseDate: anime.aired?.from || "2024-01-01",
      status: anime.status?.includes("Finished") ? "COMPLETED" : "ONGOING",
      score: anime.score || 8.0,
      episodes: anime.episodes || 12,
      synopsis: anime.synopsis || "Anime details are currently unavailable.",
    }));
  } catch {
    return demoAnime;
  }
}
