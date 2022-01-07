import React, { useState, useEffect } from "react";

const ListPage = () => {
  const [query, setQuery] = useState();
  const [movies, setMovies] = useState([]);

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
    </>
  );
};

export default ListPage;
