import React from "react";
import { Link } from "react-router-dom";

import classes from "../sass/components/settingsFeatureItem.module.scss";

const SettingsFeatureItem = (props) => {
  return (
    <Link to={props.link} className={classes["settings-features__link"]}>
      <li className={classes["settings-features__list-item"]}>
        <div className={classes["settings-features__icon-container"]}>
          <img
            src={`/assets/${props.icon}`}
            alt="Password Icon"
            className={classes["settings-features__icon"]}
          />
        </div>

        <span>{props.title}</span>
      </li>
    </Link>
  );
};

export default SettingsFeatureItem;
