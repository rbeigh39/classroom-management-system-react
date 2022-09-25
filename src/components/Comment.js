import React from "react";

import classes from "../sass/components/comment.module.scss";

const Comment = (props) => {
  return (
    <div className={classes["comment__container"]}>
      <img
        className={classes["comment__user-photo"]}
        src={`${process.env.REACT_APP_BACKEND_URL}/img/users/${props.photo}`}
        alt="user"
      />
      <div className={classes["comment__content-box"]}>
        <h4 className={classes["comment__user-name"]}>{props.name}</h4>
        <p className={classes["comment__text"]}>{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
