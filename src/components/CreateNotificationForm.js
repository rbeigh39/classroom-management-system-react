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
        <CreateNotificationType
          notificationType={props.notificationType}
          setNotificationType={props.setNotificationType}
        />
      </div>

      <div className={classes["notification-form__group"]}>
        <label className={classes["notification-form__input-label"]}>
          Title
        </label>
        <input
          type="text"
          className={`${classes["notification-form__input"]} ${classes["notification-form__input--title"]}`}
          placeholder="Notification title"
          value={props.notificationTitle}
          onChange={(e) => {
            props.setNotificationTitle(() => e.target.value);
          }}
        />
      </div>

      <div className={classes["notification-form__group"]}>
        <label className={classes["notification-form__input-label"]}>
          Description
        </label>
        <textarea
          type="textarea"
          rows="4"
          className={`${classes["notification-form__input"]} ${classes["notification-form__input--description"]}`}
          placeholder="Notification description"
          value={props.notificationDescription}
          onChange={(e) => {
            props.setNotificationDescription(() => e.target.value);
          }}
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
          value={props.notificationLink}
          onChange={(e) => {
            props.setNotificationLink(() => e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default CreateNotificationForm;
