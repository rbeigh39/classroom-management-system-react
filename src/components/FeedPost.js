import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import AuthContext from "../store/authContext";

import classes from "../sass/components/feedPost.module.scss";

const FeedPost = (props) => {
  const authCtx = useContext(AuthContext);

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    props.likes.forEach((cur) => {
      if (cur.user === authCtx.user._id) setHasLiked(true);
    });
  }, []);

  const likeBtnHandler = async () => {
    let method = "";

    if (hasLiked) {
      method = "DELETE";
    } else {
      method = "POST";
    }

    try {
      await axios({
        method,
        url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/likes/`,
        withCredentials: true,
        data: {
          post: props.postId,
        },
      });

      if (method === "POST") setHasLiked(true);
      if (method === "DELETE") setHasLiked(false);
    } catch (err) {
      console.log("something went wrong!", err);
      window.alert("Soemthing went wrong!");
    }
  };

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

      <p className={classes["post__time-stamp"]}>
        {props.timeStamp}{" "}
        <span>
          Likes ({props.likesCount}) | Comments ({props.commentsCount})
        </span>
      </p>

      <div className={classes["post__reaction-container"]}>
        <button
          className={classes["post__reaction-btn"]}
          onClick={likeBtnHandler}
        >
          <img
            src="/assets/icon_like.svg"
            alt="Like"
            className={`${classes["post__reaction-icon"]} ${
              hasLiked ? classes["post__liked"] : ""
            }`}
          />
          <span className={hasLiked ? classes["post__liked"] : ""}>Like</span>
        </button>

        <button
          className={classes["post__reaction-btn"]}
          onClick={() => {
            props.onClick(props.postId);
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
