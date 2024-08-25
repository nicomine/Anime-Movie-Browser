import { createContext, useState, useContext } from "react";

export const animeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearchAnime = (animeToSearch) => {
    let inputCleanValue = animeToSearch.toString().toLocaleLowerCase();

    setIsLoading(true);

    fetch(`${URL.jikanAnimes}${inputCleanValue}$&sfw`)
      .then((res) => {
        console.log(res);
        return res.ok ? res.json() : Promise.reject(res);
      })
      .then(({ data }) => {
        console.log(data);
        setAnimeList(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(setIsLoading(false));
  };

  const valueProvider = {
    animeList,
    isLoading,
    error,
    handleSearchAnime,
  };

  return (
    <animeContext.Provider value={valueProvider}>
      {children}
    </animeContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(animeContext);
  if (context === undefined) {
    throw new Error(
      "Se debe estar dentro del contexto para usar el hook useUserContext"
    );
  }
  return context;
};
