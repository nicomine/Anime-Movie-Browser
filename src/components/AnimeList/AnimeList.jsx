import { AnimeCard } from "../AnimeCard/AnimeCard";

export function AnimeList({ animeList, listStyle }) {
  return (
    <div className={listStyle}>
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          image={anime.images.jpg.image_url}
          animeTitle={anime.title}
        />
      ))}
    </div>
  );
}
