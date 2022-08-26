import React from "react";

import classes from "../sass/components/feedPost.module.scss";

const FeedPost = (props) => {
  return (
    <div className={classes["post__container"]}>
      <div className={classes["post__header"]}>
        <img
          src="/users/man.jpg"
          alt="User"
          className={classes["post__user-img"]}
        />
        <h4 className={classes["post__user-name"]}>Rayan Beigh</h4>
        <p className={classes["post__text"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          debitis eveniet modi nulla. Consequuntur odio.
        </p>
      </div>

      <div className={classes["post__image-container"]}>
        <img
          src="/users/meeting.jpg"
          alt="Meeting"
          className={classes["post__image"]}
        />
      </div>

      <p className={classes["post__time-stamp"]}>Aug 23, 11:30pm</p>

      <div className={classes["post__reaction-container"]}>
        <button className={classes["post__reaction-btn"]}>
          {/* <svg className={classes["post__reaction-icon"]}>
            <use xlinkHref="/assets/icon_like.svg"></use>
          </svg> */}
          <img
            src="/assets/icon_like.svg"
            alt="Like"
            className={classes["post__reaction-icon"]}
          />
          Like
        </button>

        <button className={classes["post__reaction-btn"]}>
          <img
            src="/assets/icon_comment.svg"
            alt="Comment"
            className={classes["post__reaction-icon"]}
          />
          Comment
        </button>
      </div>
    </div>
  );
};

export default FeedPost;
