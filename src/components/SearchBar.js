import React from "react";

import classes from "../sass/components/searchBar.module.scss";

const SearchBar = (props) => {
  return (
    <div className={classes["search-bar__container"]}>
      <input
        type="text"
        className={classes["search-bar__input"]}
        placeholder="Search"
      />
      <button className={classes["search-bar__button"]}>
        <img
          src="../../assets/icon_search.svg"
          alt="Search Icon"
          className={classes["search-bar__search-icon"]}
        />
      </button>
    </div>
  );
};

export default SearchBar;
