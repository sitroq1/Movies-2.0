import React, { useEffect, useState } from "react";

export default function Search({ searchMovies }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("all");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };


  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchValue, searchType);
    }
  };

  const filterSearch = (event) => {
    setSearchType(event.target.dataset.type);
  };

  useEffect(() => {
    searchMovies(searchValue, searchType)
  }, [searchType])
  return (
    <div className="row conteiner search">
      <div className="input-field">
        <input
          placeholder="Введите название фильма"
          type="search"
          className="validate"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKey}
        />
      </div>
      <div className="row">
        <p className="col">
          <label>
            <input
              name="group1"
              type="radio"
              data-type="all"
              onChange={filterSearch}
              checked={searchType === "all"}
            />
            <span>All</span>
          </label>
        </p>
        <p className="col">
          <label>
            <input
              name="group1"
              type="radio"
              data-type="movie"
              onChange={filterSearch}
              checked={searchType === "movie"}
            />
            <span>Movie</span>
          </label>
        </p>
        <p className="col">
          <label >
            <input
              name="group1"
              type="radio"
              data-type="series"
              onChange={filterSearch}
              checked={searchType === "series"}
            />
            <span>Serias</span>
          </label>
        </p>
      </div>
      <button
        className="btn search-btn"
        onClick={() => searchMovies(searchValue)}
      >
        Поиск
      </button>
    </div>
  );
}
