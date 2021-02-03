import { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Header from "./components/Header";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  //
  const getMovies = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setMovies(data.results);
      setIsLoading(false);
    } catch (e) {
      console.log("Error", e.message);
    }
  };
  //
  const handleOnSubmit = (e) => {
    e.preventDefault();
    getMovies(SEARCH_API + searchTerm);

    setSearchTerm("");
  };
  //
  const handleOnChang = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header
        onsubmit={handleOnSubmit}
        searchText={searchTerm}
        onchange={handleOnChang}
      />

      <Movies movies={movies} isLoading={isLoading} />
    </>
  );
}

export default App;
