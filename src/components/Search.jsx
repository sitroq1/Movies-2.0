import React, { useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  };

  return (
    <div className="row conteiner">
      <div className="input-field">
        <input
          placeholder="Введите название фильма"
          type="search"
          className="validate"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
