import React from "react";

import classes from "../sass/components/comment.module.scss";

const Comment = (props) => {
  return (
    <div className={classes["comment__container"]}>
      <img
        className={classes["comment__user-photo"]}
        src="/users/man-1.jpg"
        alt="user"
      />
      <div className={classes["comment__content-box"]}>
        <h4 className={classes["comment__user-name"]}>Rayan Beigh</h4>
        <p className={classes["comment__text"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          debitis eveniet modi nulla. Consequuntur odio.
        </p>
      </div>
    </div>
  );
};

export default Comment;
