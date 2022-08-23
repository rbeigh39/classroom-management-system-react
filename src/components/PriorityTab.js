import React from "react";

import classes from "../sass/components/priorityTab.module.scss";

const PriorityTab = (props) => {
  const priorityTabChangeHandler = (e) => {
    if (e.target.value === "general") {
      props.setPriorityTab("general");
    } else if (e.target.value === "important") {
      props.setPriorityTab("important");
    } else if (e.target.value === "critical") {
      props.setPriorityTab("critical");
    }
  };

  let priorityTabClasses = "";

  if (props.priorityTab === "general") {
    priorityTabClasses = `${classes["priority-tab__tab-background"]} ${classes["priority-tab__tab-background--left"]}`;
  } else if (props.priorityTab === "important") {
    priorityTabClasses = `${classes["priority-tab__tab-background"]} ${classes["priority-tab__tab-background--center"]}`;
  } else if (props.priorityTab === "critical") {
    priorityTabClasses = `${classes["priority-tab__tab-background"]} ${classes["priority-tab__tab-background--right"]}`;
  }

  return (
    <nav className={classes["priority-tab__container"]}>
      <div className={priorityTabClasses}>&nbsp;</div>

      <ul className={classes["priority-tab__nav-list"]}>
        <li className={classes["priority-tab__element"]}>
          <button
            className={`${classes["priority-tab__button"]} ${
              props.priorityTab === "general"
                ? `${classes["priority-tab__button--general-active"]}`
                : ""
            }`}
            value="general"
            onClick={priorityTabChangeHandler}
          >
            All
          </button>
        </li>
        <li className={classes["priority-tab__element"]}>
          <button
            className={`${classes["priority-tab__button"]} ${
              props.priorityTab === "important"
                ? `${classes["priority-tab__button--notification-active"]}`
                : ""
            }`}
            value="important"
            onClick={priorityTabChangeHandler}
          >
            Important
          </button>
        </li>
        <li className={classes["priority-tab__element"]}>
          <button
            className={`${classes["priority-tab__button"]} ${
              props.priorityTab === "critical"
                ? `${classes["priority-tab__button--critical-active"]}`
                : ""
            }`}
            value="critical"
            onClick={priorityTabChangeHandler}
          >
            Critical
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PriorityTab;
