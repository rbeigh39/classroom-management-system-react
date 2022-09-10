import React from "react";

import classes from "../sass/components/notificationCard.module.scss";

const NotificationCard = (props) => {
  let indicator = null;
  let link = null;

  if (props.type === "important") {
    indicator = (
      <p
        className={`${classes["notification-card__indicator"]} ${classes["notification-card__indicator--important"]}`}
      >
        Important
      </p>
    );
  } else if (props.type === "critical") {
    indicator = (
      <p
        className={`${classes["notification-card__indicator"]} ${classes["notification-card__indicator--critical"]}`}
      >
        Critical
      </p>
    );
  }

  if (props.link) {
    link = (
      <a
        href={props.link}
        className={classes["notification-card__link"]}
        rel="noreferrer"
        target="_blank"
      >
        {props.link}
      </a>
    );
  }

  return (
    <div className={classes["notification-card__container"]}>
      {indicator}
      <h2 className={classes["notification-card__title"]}>{props.title}</h2>
      <p className={classes["notification-card__date"]}>{props.date}</p>
      <p className={classes["notification-card__message"]}>{props.message}</p>
      {link}
    </div>
  );
};

export default NotificationCard;
