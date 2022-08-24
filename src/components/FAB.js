import React from "react";

import FABLinkItem from "./FABLinkItem";

import classes from "../sass/components/FAB.module.scss";

const FAB = () => {
  return (
    <div className={classes["fab__container"]}>
      <input type="checkbox" id="fab" className={classes["fab__checkbox"]} />

      <label className={classes["fab__label"]} htmlFor="fab">
        <div className={classes["fab__icon"]}>&nbsp;</div>
      </label>

      <div className={classes["fab__background"]}>&nbsp;</div>

      <ul className={classes["fab__list"]}>
        <li className={classes["fab__list-item"]}>
          <FABLinkItem
            link="/create-resources"
            icon="icon_resources_2.svg"
            title="Resource"
          />

          <FABLinkItem
            link="/create-notification"
            icon="icon_notification.svg"
            title="Notification"
          />
        </li>
      </ul>
    </div>
  );
};

export default FAB;
