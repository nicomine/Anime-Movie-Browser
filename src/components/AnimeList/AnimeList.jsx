import { AnimeCard } from "../AnimeCard/AnimeCard";
import "./AnimeList.css";

export function AnimeList({ animeList, listStyle, isLoading, error }) {
  return (
    <div className={listStyle}>
      {isLoading ? (
        <>
          <p className="loadingText">Buscando títulos...</p>
        </>
      ) : (
        <>
          {!error && animeList ? (
            <>
              {animeList.map((anime) => (
                <AnimeCard
                  key={anime.mal_id}
                  image={anime.images.jpg.image_url}
                  animeTitle={anime.title}
                />
              ))}
            </>
          ) : (
            <>
              <p>Sin coincidencias</p>
            </>
          )}
        </>
      )}
    </div>
  );
}
