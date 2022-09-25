import React from "react";

import { Link } from "react-router-dom";

import classes from "../sass/components/profileComment.module.scss";

const ProfileComment = (props) => {
  return (
    <div className={classes["comment__container"]}>
      <time className={classes["comment__date"]}>22-12-2021</time>
      <p className={classes["comment__text"]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam debitis
        eveniet modi nulla. Consequuntur odio consectetur adipisicing elit.
        Ullam debitis eveniet modi nulla.
      </p>

      <Link to="/tab-pages/home" className={classes["comment__post-link"]}>
        View Post
      </Link>
    </div>
  );
};

export default ProfileComment;
