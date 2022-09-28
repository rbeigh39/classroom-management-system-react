import React, { useState } from "react";

import classes from "../sass/components/feedPost.module.scss";

const FeedPost = (props) => {
  let imageLink = null;
  let postText = null;

  if (props.imageLink) imageLink = props.imageLink;
  if (props.postText) postText = props.postText;

  const [menuIsChecked, setmenuIsChecked] = useState(false);
  console.log("menu checked status: ", menuIsChecked);

  return (
    <div className={classes["post__container"]}>
      <div className={classes["post__header"]}>
        <img
          src={props.userImage}
          alt="User"
          className={classes["post__user-img"]}
        />
        <h4 className={classes["post__user-name"]}>{props.userName}</h4>
        <div className={classes["post__menu-container"]}>
          <label
            className={classes["post-menu__label"]}
            htmlFor={`post-menu-toggle-${props.id}`}
          >
            <img
              src="/assets/icon_dot-menu.svg"
              alt="Menu icon"
              className={classes["post-menu__icon"]}
            />
          </label>

          <input
            type="checkbox"
            onChange={() => {
              setmenuIsChecked(!menuIsChecked);
            }}
            id={`post-menu-toggle-${props.id}`}
            className={classes["post-menu__checkbox"]}
          />

          {menuIsChecked && (
            <div className={classes["post-menu__options-container"]}>
              <ul className={classes["post-menu__options-list"]}>
                <li className={classes["post-menu__options-list-item"]}>
                  <button
                    className={`${classes["post-menu__option-button"]} ${classes["post-menu__option-button--danger"]}`}
                  >
                    <div
                      className={
                        classes["post-menu__options-list-icon-container"]
                      }
                    >
                      <img
                        src="/assets/icon_trash-can.svg"
                        alt="icon delete"
                        className={classes["post-menu__item-icon"]}
                      />
                    </div>
                    Delete
                  </button>
                </li>

                <li className={classes["post-menu__options-list-item"]}>
                  <button className={classes["post-menu__option-button"]}>
                    <div
                      className={
                        classes["post-menu__options-list-icon-container"]
                      }
                    >
                      <img
                        src="/assets/icon_share.svg"
                        alt="icon share"
                        className={classes["post-menu__item-icon"]}
                      />
                    </div>
                    Share
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

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
