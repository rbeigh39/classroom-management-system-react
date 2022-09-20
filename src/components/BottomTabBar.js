import React, { useState } from "react";

import IconTabBar from "./IconTabBar";

import classes from "../sass/components/bottomTabBar.module.scss";

const BottomTabBar = () => {
  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [isActiveResources, setIsActiveResources] = useState(false);
  const [isActiveBriefings, setIsActiveBriefings] = useState(false);
  const [isActiveForum, setIsActiveForum] = useState(false);

  console.log("these are the flags: ", {
    isActiveHome,
    isActiveNotification,
    isActiveResources,
    isActiveBriefings,
    isActiveForum,
  });

  const setActiveTarget = (target) => {
    setIsActiveHome(false);
    setIsActiveNotification(false);
    setIsActiveResources(false);
    setIsActiveBriefings(false);
    setIsActiveForum(false);

    if (target === "home") {
      setIsActiveHome(true);
    } else if (target === "notifications") {
      setIsActiveNotification(true);
    } else if (target === "resources") {
      setIsActiveResources(true);
    } else if (target === "briefings") {
      setIsActiveBriefings(true);
    } else if (target === "forum") {
      setIsActiveForum(true);
    }
  };

  return (
    <div className={classes["tab-bar"]}>
      <nav className={classes["tab-bar__container"]}>
        <IconTabBar
          icon="icon_home.svg"
          iconAltName="Home"
          isActive={isActiveHome}
          setTarget={setActiveTarget}
          target="/tab-pages/home"
        />
        <IconTabBar
          icon="icon_notification.svg"
          iconAltName="Home"
          isActive={isActiveNotification}
          setTarget={setActiveTarget}
          target="/tab-pages/notifications"
        />
        <IconTabBar
          icon="icon_resources_2.svg"
          iconAltName="Home"
          isActive={isActiveResources}
          setTarget={setActiveTarget}
          target="/tab-pages/resources"
        />
        <IconTabBar
          icon="icon_briefings.svg"
          iconAltName="Home"
          isActive={isActiveBriefings}
          setTarget={setActiveTarget}
          target="/tab-pages/briefings"
        />
        <IconTabBar
          icon="icon_discussionForum.svg"
          iconAltName="Home"
          isActive={isActiveForum}
          setTarget={setActiveTarget}
          target="/forum"
        />
      </nav>
    </div>
  );
};

export default BottomTabBar;
