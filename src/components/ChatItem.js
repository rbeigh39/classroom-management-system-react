import React from "react";

import classes from "../sass/components/chatItem.module.scss";

const ChatItem = (props) => {
  // message
  // image
  // foreign/local
  // fileDownload
  // userImage
  // name

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
              src={`${process.env.REACT_APP_BACKEND_URL}/img/users/${props.userImage}`}
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
        {props.message}
      </p>

      {props.image && (
        <div className={classes["chat__image-container"]}>
          <img
            className={classes["chat__image"]}
            src={`${process.env.REACT_APP_BACKEND_URL}/img/messages/${props.image}`}
            alt="chat"
          />
        </div>
      )}

      {props.fileDownload && (
        <div className={classes["chat__download-container"]}>
          <a
            className={`${classes["chat__download-link"]} ${
              props.type === "local"
                ? classes["chat__download-link--local"]
                : ""
            }`}
            href={props.fileDownload}
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
      )}
    </div>
  );
};

export default ChatItem;
