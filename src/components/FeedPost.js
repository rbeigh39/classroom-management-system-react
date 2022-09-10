import React from "react";

import classes from "../sass/components/feedPost.module.scss";

const FeedPost = (props) => {
  let imageLink = null;
  let postText = null;

  if (props.imageLink && props.imageLink !== "") {
    imageLink = props.imageLink;
  }

  if (props.imageLink === "") {
    imageLink = undefined;
  }

  if (props.postText) postText = props.postText;

  return (
    <div className={classes["post__container"]}>
      <div className={classes["post__header"]}>
        <img
          src={props.userImage}
          alt="User"
          className={classes["post__user-img"]}
        />
        <h4 className={classes["post__user-name"]}>{props.userName}</h4>

        {postText && <p className={classes["post__text"]}>{props.postText}</p>}
      </div>

      {imageLink && (
        <div className={classes["post__image-container"]}>
          <img
            src={props.imageLink}
            alt="Post"
            className={classes["post__image"]}
          />
        </div>
      )}

      <p className={classes["post__time-stamp"]}>{props.timeStamp}</p>

      <div className={classes["post__reaction-container"]}>
        <button className={classes["post__reaction-btn"]}>
          <img
            src="/assets/icon_like.svg"
            alt="Like"
            className={classes["post__reaction-icon"]}
          />
          Like
        </button>

        <button
          className={classes["post__reaction-btn"]}
          onClick={() => {
            props.onClick();
          }}
        >
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
