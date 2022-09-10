import React, { useState, useEffect } from "react";
import axios from "axios";
import dateFormater from "../utilities/dateFormater";

import TabHeader from "../components/TabHeader";
import PriorityTab from "../components/PriorityTab";
import NotificationCard from "../components/NotificationCard";

import classes from "../sass/pages/notifications.module.scss";

const Notifications = () => {
  const [priorityTab, setPriorityTab] = useState("general");

  const [notifications, setNotifications] = useState([]);

  let filteredNotifications = notifications;

  if (priorityTab === "critical") {
    filteredNotifications = notifications.filter((cur) => {
      return cur.type === "critical";
    });
  }

  if (priorityTab === "important") {
    filteredNotifications = notifications.filter((cur) => {
      return cur.type === "important";
    });
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/notifications`,
      withCredentials: true,
    })
      .then((res) => {
        const resNotifications = res.data.data.notifications;

        // const notificationsArr = Object.keys(notifications).map((cur) => {
        //   return notifications[cur];
        // });

        setNotifications((prevState) => {
          return [...notifications, ...resNotifications];
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setNotifications({});
    };
  }, []);

  return (
    <>
      <TabHeader title="Notifications" />

      <div className={classes["notifications-page"]}>
        <PriorityTab
          priorityTab={priorityTab}
          setPriorityTab={setPriorityTab}
        />

        <main className={classes["notifications__container"]}>
          {filteredNotifications.map((cur) => {
            const notificationLink = cur.link ? cur.link : "";

            return (
              <NotificationCard
                key={cur._id}
                title={cur.title}
                date={dateFormater(cur.createdAt)}
                message={cur.message}
                type={cur.type}
                link={notificationLink}
              />
            );
          })}

          {/*
          <NotificationCard
            title="Revised Timetable"
            date="22-12-2022"
            message="The time table was updated recently. Download the revised tametable."
            type="important"
            link="https://pubble-app.herokuapp.com/notifications.html"
          />

          <NotificationCard
            title="Revised Timetable"
            date="22-12-2022"
            message="The time table was updated recently. Download the revised tametable."
          />
          
          <NotificationCard
            title="Revised Timetable"
            date="22-12-2022"
            message="The time table was updated recently. Download the revised tametable."
            type="critical"
          /> */}
        </main>
      </div>
    </>
  );
};

export default Notifications;
