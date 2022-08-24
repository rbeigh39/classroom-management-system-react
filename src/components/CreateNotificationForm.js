import React from "react";

import CreateNotificationType from "./CreateNotificationType";

import classes from "../sass/components/createNotificationForm.module.scss";

const CreateNotificationForm = (props) => {
  return (
    <form>
      <div className={classes["notification-form__group"]}>
        <label
          className={`${classes["notification-form__input-label"]} u-margin-bottom-medium`}
        >
          Type
        </label>
        <CreateNotificationType />
      </div>

      <div className={classes["notification-form__group"]}>
        <label className={classes["notification-form__input-label"]}>
          Title
        </label>
        <input
          type="text"
          className={`${classes["notification-form__input"]} ${classes["notification-form__input--title"]}`}
          placeholder="Notification title"
        />
      </div>

      <div className={classes["notification-form__group"]}>
        <label className={classes["notification-form__input-label"]}>
          Description
        </label>
        <input
          type="textarea"
          className={`${classes["notification-form__input"]} ${classes["notification-form__input--description"]}`}
          placeholder="Notification description"
        />
      </div>

      <div className={classes["notification-form__group"]}>
        <label className={classes["notification-form__input-label"]}>
          Link
        </label>
        <input
          type="text"
          className={`${classes["notification-form__input"]} ${classes["notification-form__input--link"]}`}
          placeholder="Add a link"
        />
      </div>
    </form>
  );
};

export default CreateNotificationForm;
