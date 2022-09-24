import React from "react";

import { Link } from "react-router-dom";

import classes from "../sass/components/tabHeader.module.scss";

const TabHeader = (props) => {
  return (
    <header className={classes["header__container"]}>
      <div className={classes["header__logo-container"]}>
        <img
          src="/assets/Vector.svg"
          alt="Logo"
          className={classes["header__logo"]}
        />
      </div>

      <h1 className={classes["header__title"]}>{props.title}</h1>

      <Link to="/profile" className={classes["header__profile-icon-box"]}>
        <img
          src="/assets/icon_profile.svg"
          alt="Profile"
          className={classes["header__profile-icon"]}
        />
      </Link>
    </header>
  );
};

export default TabHeader;
