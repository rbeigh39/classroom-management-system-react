import React, { useState } from "react";

import classes from "../sass/components/createNotificationType.module.scss";

const CreateNotificationType = (props) => {
  const [notificationType, setNotificationType] = useState("NT-general");

  console.log({
    notificationType,
  });

  return (
    <div className={classes["notification-type__container"]}>
      <div className={classes["notification-type__active-bg"]}>&nbsp;</div>
      <div className={classes["notification-type__element"]}>
        <label
          htmlFor="NT-general"
          className={classes["notification-type__radio-label"]}
        >
          General
        </label>
        <input
          type="radio"
          name="notification-type"
          value={notificationType}
          //  defaultChecked={generalChecked}
          onChange={() => {
            setNotificationType("NT-general");
          }}
          className={classes["notification-type__radio"]}
          id="NT-general"
        />
      </div>

      <div className={classes["notification-type__element"]}>
        <label
          htmlFor="NT-important"
          className={classes["notification-type__radio-label"]}
        >
          Important
        </label>
        <input
          type="radio"
          name="notification-type"
          //  value="important"
          value={notificationType}
          className={classes["notification-type__radio"]}
          //  defaultChecked={importantChecked}
          onChange={() => {
            setNotificationType("NT-important");
          }}
          id="NT-important"
        />
      </div>

      <div className={classes["notification-type__element"]}>
        <label
          htmlFor="NT-critical"
          className={classes["notification-type__radio-label"]}
        >
          Critical
        </label>
        <input
          type="radio"
          name="notification-type"
          //  value="critical"
          value={notificationType}
          className={classes["notification-type__radio"]}
          //  defaultChecked={criticalChecked}
          onChange={() => {
            setNotificationType("NT-critical");
          }}
          id="NT-critical"
        />
      </div>
    </div>
  );
};

export default CreateNotificationType;
