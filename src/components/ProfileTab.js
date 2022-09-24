import React from "react";

import classes from "../sass/components/profileTab.module.scss";

const ProfileTab = (props) => {
  const profileTabChangeHandler = (e) => {
    if (e.target.value === "posts") {
      props.setProfileTab("posts");
    } else if (e.target.value === "likes") {
      props.setProfileTab("likes");
    } else if (e.target.value === "comments") {
      props.setProfileTab("comments");
    }
  };

  let profileTabClass = "";

  if (props.profileTab === "posts") {
    profileTabClass = `${classes["profile-tab__tab-background"]} ${classes["profile-tab__tab-background--left"]}`;
  } else if (props.profileTab === "likes") {
    profileTabClass = `${classes["profile-tab__tab-background"]} ${classes["profile-tab__tab-background--center"]}`;
  } else if (props.profileTab === "comments") {
    profileTabClass = `${classes["profile-tab__tab-background"]} ${classes["profile-tab__tab-background--right"]}`;
  }

  return (
    <nav className={classes["profile-tab__container"]}>
      <div className={profileTabClass}>&nbsp;</div>

      <ul className={classes["profile-tab__nav-list"]}>
        <li className={classes["profile-tab__element"]}>
          <button
            className={`${classes["profile-tab__button"]} ${
              props.profileTab === "posts"
                ? `${classes["profile-tab__button--active"]}`
                : ""
            }`}
            value="posts"
            onClick={profileTabChangeHandler}
          >
            Posts
          </button>
        </li>
        <li className={classes["profile-tab__element"]}>
          <button
            className={`${classes["profile-tab__button"]} ${
              props.profileTab === "likes"
                ? `${classes["profile-tab__button--active"]}`
                : ""
            }`}
            value="likes"
            onClick={profileTabChangeHandler}
          >
            Likes
          </button>
        </li>
        <li className={classes["profile-tab__element"]}>
          <button
            className={`${classes["profile-tab__button"]} ${
              props.profileTab === "comments"
                ? `${classes["profile-tab__button--active"]}`
                : ""
            }`}
            value="comments"
            onClick={profileTabChangeHandler}
          >
            Comments
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileTab;
