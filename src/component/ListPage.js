import React, { useState, useEffect } from "react";
import axios from "../axios";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";

import MovieCard from "./MovieCard";

const APIKEY = "20118efccb52d0b7f949432f9103ae7b";

const ListPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState([0]);

  //fetch movies from api
  const fetchMovies = async () => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US`
    );
    //console.log("movies: ", request.data.results);
    setMovies(request.data.results);
  };

  //serach movie from api
  const searchMovie = async (query) => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    //console.log("searchmovies: ", request.data.results);
    setMovies(request.data.results);
  };

  useEffect(() => {
    if (!query) {
      fetchMovies();
    } else {
      const delayDebounceFn = setTimeout(() => {
        searchMovie(query);
      }, 3000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [query]);

  return (
    <div className="cotainer">
      <div className="header-container">
        <div className="search-container">
          <SearchIcon color="action" />
          <input
            placeholder="search.."
            type="text"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <HomeIcon color="action" className="home-icon" fontSize="medium" />
      </div>

      <div className="movie-container">
        {/* {
          <InfiniteScroll
            dataLength={movies.length}
            next={() => setPage(page + 1)}
            hasMore={true}
          > */}
        {movies
          .sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
          .map((movie) => {
            return <MovieCard movieList={movie} key={movie.id} />;
          })}
        {/* </InfiniteScroll>
        } */}
      </div>
    </div>
  );
};

export default ListPage;
