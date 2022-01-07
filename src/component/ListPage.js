import React, { useState, useEffect } from "react";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

const ListPage = ({ urlType }) => {
  const [query, setQuery] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(urlType);
      console.log("movies: ", request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [urlType]);

  return (
    <>
      <div className="header">
        <form className="search-form">
          <input
            type="text"
            name="query"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="home-icon">Home</div>
      </div>
      <div>
        {movies
          .sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
          .map((movie) => {
            return (
              <div key={movie.id}>
                <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                <div>
                  <h3>{movie.title}</h3>
                  <h4>{movie.vote_average}</h4>
                </div>
                <p>{movie.overview}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListPage;
