import React from "react";

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

      <div className={classes["header__menu-icon-box"]}>
        <img
          src="/assets/icon_menu.svg"
          alt="Menu icon"
          className={classes["header__menu-icon"]}
        />
      </div>
    </header>
  );
};

export default TabHeader;
