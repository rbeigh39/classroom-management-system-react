import React from "react";

import CreateHeader from "../components/CreateHeader";
import CreateNotificationForm from "../components/CreateNotificationForm";

import classes from "../sass/pages/createNotification.module.scss";

const CreateNotification = () => {
  return (
    <div className={classes["create-notification-page"]}>
      <CreateHeader backLink="/tab-pages/notifications" />

      <h1 className={classes["create-notification__heading"]}>
        Create Notification
      </h1>

      <CreateNotificationForm />
    </div>
  );
};

export default CreateNotification;
