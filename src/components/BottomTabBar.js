import React, { useState } from "react";

import IconTabBar from "./IconTabBar";

import classes from "../sass/components/bottomTabBar.module.scss";

const BottomTabBar = () => {
  const [isActiveHome, setIsActiveHome] = useState(true);
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [isActiveResources, setIsActiveResources] = useState(false);
  const [isActiveBriefings, setIsActiveBriefings] = useState(false);
  const [isActiveForum, setIsActiveForum] = useState(false);

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
          linkTo="/tab-pages/home"
          target="home"
        />
        <IconTabBar
          icon="icon_notification.svg"
          iconAltName="Home"
          isActive={isActiveNotification}
          setTarget={setActiveTarget}
          linkTo="/tab-pages/notifications"
          target="notifications"
        />
        <IconTabBar
          icon="icon_resources_2.svg"
          iconAltName="Home"
          isActive={isActiveResources}
          setTarget={setActiveTarget}
          linkTo="/tab-pages/resources"
          target="resources"
        />
        <IconTabBar
          icon="icon_briefings.svg"
          iconAltName="Home"
          isActive={isActiveBriefings}
          setTarget={setActiveTarget}
          linkTo="/tab-pages/briefings"
          target="briefings"
        />
        <IconTabBar
          icon="icon_discussionForum.svg"
          iconAltName="Home"
          isActive={isActiveForum}
          setTarget={setActiveTarget}
          linkTo="/forum"
          target="forum"
        />
      </nav>
    </div>
  );
};

export default BottomTabBar;
