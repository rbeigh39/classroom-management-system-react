import React, { useState } from "react";

import classes from "../sass/components/createNotificationType.module.scss";

const CreateNotificationType = (props) => {
  const [notificationType, setNotificationType] = useState("NT-general");

  let backgroundActiveClass = null;

  if (notificationType === "NT-general") {
    backgroundActiveClass = `${classes["notification-type__active-bg--left"]}`;
  } else if (notificationType === "NT-important") {
    backgroundActiveClass = `${classes["notification-type__active-bg--center"]}`;
  } else if (notificationType === "NT-critical") {
    backgroundActiveClass = `${classes["notification-type__active-bg--right"]}`;
  }

  return (
    <div className={classes["notification-type__container"]}>
      <div
        className={`${classes["notification-type__active-bg"]} ${backgroundActiveClass}`}
      >
        &nbsp;
      </div>
      <div className={classes["notification-type__element"]}>
        <input
          type="radio"
          name="notification-type"
          value={notificationType}
          defaultChecked="checked"
          onChange={() => {
            setNotificationType("NT-general");
          }}
          className={`${classes["notification-type__radio"]} ${classes["notification-type__radio--general"]}`}
          id="NT-general"
        />
        <label
          htmlFor="NT-general"
          className={classes["notification-type__radio-label"]}
        >
          General
        </label>
      </div>

      <div className={classes["notification-type__element"]}>
        <input
          type="radio"
          name="notification-type"
          value={notificationType}
          className={`${classes["notification-type__radio"]} ${classes["notification-type__radio--important"]}`}
          onChange={() => {
            setNotificationType("NT-important");
          }}
          id="NT-important"
        />
        <label
          htmlFor="NT-important"
          className={classes["notification-type__radio-label"]}
        >
          Important
        </label>
      </div>

      <div className={classes["notification-type__element"]}>
        <input
          type="radio"
          name="notification-type"
          value={notificationType}
          className={`${classes["notification-type__radio"]} ${classes["notification-type__radio--critical"]}`}
          onChange={() => {
            setNotificationType("NT-critical");
          }}
          id="NT-critical"
        />
        <label
          htmlFor="NT-critical"
          className={classes["notification-type__radio-label"]}
        >
          Critical
        </label>
      </div>
    </div>
  );
};

export default CreateNotificationType;
