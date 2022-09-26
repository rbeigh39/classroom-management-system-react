import React, { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "../sass/components/tabHeader.module.scss";
import AuthContext from "../store/authContext";

const TabHeader = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <header className={classes["header__container"]}>
      <Link to="/tab-pages/home" className={classes["header__logo-container"]}>
        <img
          src="/assets/Vector.svg"
          alt="Logo"
          className={classes["header__logo"]}
        />
      </Link>

      <h1 className={classes["header__title"]}>{props.title}</h1>

      <Link to="/profile" className={classes["header__profile-icon-box"]}>
        <img
          src={`${process.env.REACT_APP_BACKEND_URL}/img/users/${authCtx.user.photo}`}
          alt="Profile"
          className={classes["header__profile-icon"]}
        />
      </Link>
    </header>
  );
};

export default TabHeader;
