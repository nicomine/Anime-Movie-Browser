import { useState } from "react";
import { URL } from "../../services/Url";
import "./MainStyles.css";
import { NavBar } from "../../components/navBar/NavBar";
import { AnimeList } from "../../components/AnimeList/AnimeList";

export function Main() {
  const [animeInput, setAnimeInput] = useState();
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleAnimeInputChange = (e) => {
    setAnimeInput(e.target.value);
  };

  const handleSearchAnime = () => {
    let inputCleanValue = animeInput.toString().toLocaleLowerCase();

    setIsLoading(true);

    fetch(`${URL.jikanAnimes}${inputCleanValue}$&sfw`)
      .then((res) => {
        console.log(res);
        return res.ok ? res.json() : Promise.reject(res);
      })
      .then(({ data }) => {
        console.log(data);
        setAnimeList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <div className="animeMainContainer">
      <h2 className="containerTitle">Anime Repertory</h2>

      <NavBar
        inputType={"text"}
        inputPlaceHolder={"Anime name"}
        onChange={handleAnimeInputChange}
        onClick={handleSearchAnime}
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
