import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import classes from "../sass/pages/profile.module.scss";

import ProfileTab from "../components/ProfileTab";
import FeedPost from "../components/FeedPost";
import ProfileComment from "../components/ProfileComment";

const Profile = (props) => {
  const navigate = useNavigate();

  const [profileTab, setProfileTab] = useState("posts");

  const openCommentBar = () => {
    navigate("/profile/comment-tab");
  };

  return (
    <div className={classes["profile-page__container"]}>
      <div className={classes["profile-page__background"]}>&nbsp;</div>

      <div className={classes["profile-header__container"]}>
        <Link to="/tab-pages/home" className={classes["profile-header__icon"]}>
          <img
            src="/assets/icon_home.svg"
            alt="Home"
            className={`${classes["profile-header__icon-home"]}`}
          />
        </Link>

        <h1 className={classes["profile-header__heading"]}>Profile</h1>

        <Link to="/tab-pages/home" className={classes["profile-header__icon"]}>
          <img
            src="/assets/icon_settings.svg"
            alt="Settings"
            className={`${classes["profile-header__icon-settings"]}`}
          />
        </Link>
      </div>

      <div className={classes["profile-info__container"]}>
        <figure className={classes["profile-info__image-container"]}>
          <img
            className={classes["profile-info__profile-picture"]}
            src="/users/img-1.jpg"
            alt="Profile"
          />
        </figure>

        <h2 className={classes["profile-info__name"]}>Rayan Beigh</h2>
        <p className={classes["profile-info__tagline"]}>
          Full stack Developer and Designer
        </p>
      </div>

      <ProfileTab profileTab={profileTab} setProfileTab={setProfileTab} />

      <div className={classes["profile-items__container"]}>
        <ProfileComment />

        <FeedPost
          postText={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam debitis eveniet modi nulla. Consequuntur odio.`}
          userImage={`/users/img-1.jpg`}
          userName={`Rayan Beigh`}
          onClick={openCommentBar}
        />

        <FeedPost
          postText={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam debitis eveniet modi nulla. Consequuntur odio.`}
          userImage={`/users/img-1.jpg`}
          userName={`Rayan Beigh`}
          onClick={openCommentBar}
        />

        <FeedPost
          postText={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam debitis eveniet modi nulla. Consequuntur odio.`}
          userImage={`/users/img-1.jpg`}
          userName={`Rayan Beigh`}
          onClick={openCommentBar}
        />
      </div>

      <Outlet />
    </div>
  );
};

export default Profile;
