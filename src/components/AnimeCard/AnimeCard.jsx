import "./AnimeCard.css";

export function AnimeCard({ image, key, animeTitle, className }) {
  return (
    <div className={className || "animeCard"}>
      <img src={image}></img>
      <p key={key} className="animeTitle">
        {animeTitle}
      </p>
    </div>
  );
}
