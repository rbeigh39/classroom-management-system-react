import React from "react";

import { Link } from "react-router-dom";

import classes from "../sass/components/profileComment.module.scss";

const ProfileComment = (props) => {
  return (
    <div className={classes["comment__container"]}>
      <time className={classes["comment__date"]}>{props.timeStamp}</time>
      <p className={classes["comment__text"]}>{props.comment}</p>

      <Link to="/tab-pages/home" className={classes["comment__post-link"]}>
        View Post
      </Link>
    </div>
  );
};

export default ProfileComment;
