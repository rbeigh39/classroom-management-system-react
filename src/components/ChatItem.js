import React from "react";

import classes from "../sass/components/chatItem.module.scss";

const ChatItem = (props) => {
  // const klass = props.type === "local" ? classes["chat-container--local"] : "";

  return (
    <div
      className={`${classes["chat__container"]} ${
        props.type === "local" ? classes["chat__container--local"] : ""
      }`}
    >
      {props.type === "foreign" && (
        <div className={classes["chat-header__container"]}>
          <div className={classes["chat-header__image-container"]}>
            <img
              className={classes["chat-header__image"]}
              src={`${process.env.REACT_APP_BACKEND_URL}/img/users/user-631b08adaad9bb4688170a14-1662827282073.jpeg`}
              alt="user"
            />
          </div>
          <h3 className={classes["chat-header__name"]}>Rayan Beigh</h3>
        </div>
      )}

      <p
        className={`${classes["chat__text"]} ${
          props.type === "local" ? classes["chat__text--local"] : ""
        }`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam debitis
        eveniet modi nulla. Consequuntur odio.
      </p>

      <div className={classes["chat__image-container"]}>
        <img
          className={classes["chat__image"]}
          src={`${process.env.REACT_APP_BACKEND_URL}/img/posts/user-631b0773aad9bb4688170a0c-1662805198894.jpeg`}
          alt="chat"
        />
      </div>

      <div className={classes["chat__download-container"]}>
        <a
          className={`${classes["chat__download-link"]} ${
            props.type === "local" ? classes["chat__download-link--local"] : ""
          }`}
          href="gmail.com"
        >
          <img
            className={`${classes["chat__download-icon"]} ${
              props.type === "local"
                ? classes["chat__download-icon--local"]
                : ""
            }`}
            src="/assets/icon_chat-download.svg"
            alt="downlaod icon"
          />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};

export default ChatItem;
