import React, { useState, useEffect } from "react";
import axios from "axios";

import CreateHeader from "../components/CreateHeader";
import CreateNotificationForm from "../components/CreateNotificationForm";

import classes from "../sass/pages/createNotification.module.scss";

const postNotification = async (
  notificationType,
  notificationTitle,
  notificationDescription,
  notificationLink
) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/notifications`,
      withCredentials: true,
      data: {
        type: notificationType,
        title: notificationTitle,
        message: notificationDescription,
        link: notificationLink,
      },
    });

    return res;
  } catch (err) {
    console.log("Error Posting Notification!", err);
    window.alert("Error Posting Notification!");
  }
};

const CreateNotification = () => {
  const [btnIsActive, setBtnIsActive] = useState(false);

  const [notificationType, setNotificationType] = useState("NT-general");
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationDescription, setNotificationDescription] = useState("");
  const [notificationLink, setNotificationLink] = useState("");

  const postNotificationHandler = async () => {
    let notification_type = null;
    let notification_link = null;

    if (notificationType === "NT-general") {
      notification_type = "general";
    } else if (notificationType === "NT-important") {
      notification_type = "important";
    } else if (notificationType === "NT-critical") {
      notification_type = "critical";
    }

    if (notificationLink.length > 0) {
      notification_link = notificationLink;
    }

    await postNotification(
      notification_type,
      notificationTitle,
      notificationDescription,
      notification_link
    );

    setNotificationType(() => "NT-general");
    setNotificationTitle(() => "");
    setNotificationDescription(() => "");
    setNotificationLink(() => "");

    console.log("notification created successfully");
    window.alert("notification created successfully");
  };

  useEffect(() => {
    if (
      !notificationType ||
      notificationTitle.length === 0 ||
      notificationDescription.length === 0
    ) {
      return setBtnIsActive(false);
    }

    return setBtnIsActive(true);
  }, [notificationType, notificationTitle, notificationDescription]);

  return (
    <div className={classes["create-notification-page"]}>
      <CreateHeader
        backLink="/tab-pages/notifications"
        btnIsActive={btnIsActive}
        btnOnLickHandlerFn={postNotificationHandler}
      />

      <h1 className={classes["create-notification__heading"]}>
        Create Notification
      </h1>

      <CreateNotificationForm
        notificationType={notificationType}
        setNotificationType={setNotificationType}
        notificationTitle={notificationTitle}
        setNotificationTitle={setNotificationTitle}
        notificationDescription={notificationDescription}
        setNotificationDescription={setNotificationDescription}
        notificationLink={notificationLink}
        setNotificationLink={setNotificationLink}
      />
    </div>
  );
};

export default CreateNotification;
