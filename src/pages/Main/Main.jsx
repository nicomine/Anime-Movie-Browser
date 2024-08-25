import { useState } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { useAnimeContext } from "../../contexts/AnimeContext";

import "./MainStyles.css";

export function Main() {
  const [animeInput, setAnimeInput] = useState();

  const { animeList, isLoading, error, handleSearchAnime } = useAnimeContext();

  const handleAnimeInputChange = (e) => {
    setAnimeInput(e.target.value);
  };

  return (
    <div className="animeMainContainer">
      <h2 className="containerTitle">Anime Repertory</h2>

      <NavBar
        inputType={"text"}
        inputPlaceHolder={"Anime name"}
        onChange={handleAnimeInputChange}
        onClick={() => handleSearchAnime(animeInput)}
        buttonType={"submit"}
      />

      <AnimeList
        animeList={animeList}
        listStyle={"animeListContainer"}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
