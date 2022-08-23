import React, { useState } from "react";

import TabHeader from "../components/TabHeader";
import PriorityTab from "../components/PriorityTab";
import NotificationCard from "../components/NotificationCard";

import classes from "../sass/pages/notifications.module.scss";

const Notifications = () => {
  const [priorityTab, setPriorityTab] = useState("general");

  return (
    <>
      <TabHeader title="Notifications" />

      <div className={classes["notifications-page"]}>
        <PriorityTab
          priorityTab={priorityTab}
          setPriorityTab={setPriorityTab}
        />

        <main className={classes["notifications__container"]}>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard
            type="important"
            link="https://pubble-app.herokuapp.com/notifications.html"
          />
          <NotificationCard />
          <NotificationCard type="important" />
          <NotificationCard type="critical" />
        </main>
      </div>
    </>
  );
};

export default Notifications;
