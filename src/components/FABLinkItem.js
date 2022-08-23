import React from "react";
import { Link } from "react-router-dom";

import classes from "../sass/components/FABLinkItem.module.scss";

const FABLinkItem = (props) => {
  return (
    <Link to={props.link} className={classes["fab-link__container"]}>
      <h4 className={classes["fab-link__title"]}>{props.title}</h4>
      <div className={classes["fab-link__icon-container"]}>
        <img
          src={`/assets/${props.icon}`}
          alt="Icon Resource"
          className={classes["fab-link__icon"]}
        />
      </div>
    </Link>
  );
};

export default FABLinkItem;
