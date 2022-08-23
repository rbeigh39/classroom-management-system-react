import React from "react";

import classes from "../sass/pages/workInProgress.module.scss";

const WorkInProgress = () => {
  return (
    <main className={classes["work-in-progress"]}>
      <div className={classes["work-in-progress__container"]}>
        <img
          src="/assets/craft_2x.png"
          alt="Work In Progress"
          className={classes["work-in-progress__image"]}
        />
        <p className={classes["work-in-progress__message"]}>
          This screen is a work in progress, and we are working hard to release
          it
        </p>
      </div>
    </main>
  );
};

export default WorkInProgress;
