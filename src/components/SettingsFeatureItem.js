import React from "react";
import { Link } from "react-router-dom";

import classes from "../sass/components/settingsFeatureItem.module.scss";

const SettingsFeatureItem = (props) => {
  let link = "/";

  if (props.type === "link") link = props.link;

  const listItem = (
    <li
      className={classes["settings-features__list-item"]}
      onClick={(e) => {
        props.onClick();
      }}
    >
      <div className={classes["settings-features__icon-container"]}>
        <img
          src={`/assets/${props.icon}`}
          alt="Password Icon"
          className={classes["settings-features__icon"]}
        />
      </div>

      <span>{props.title}</span>
    </li>
  );

  if (props.type === "link")
    return (
      <Link to={link} className={classes["settings-features__link"]}>
        {listItem}
      </Link>
    );

  if (props.type === "button") return listItem;
};

export default SettingsFeatureItem;
