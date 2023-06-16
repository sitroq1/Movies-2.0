import React, { useState } from "react";

export default function Search({searchMovies}) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === 'Enter') {
        searchMovies(searchValue)
    }
  }

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
      <button className="btn search-btn" onClick={() => searchMovies(searchValue)}>Поиск</button>
    </div>

  );
}
