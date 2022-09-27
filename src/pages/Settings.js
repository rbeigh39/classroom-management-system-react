import React, { useState } from "react";

import { Link } from "react-router-dom";

import classes from "../sass/pages/settings.module.scss";

const Settings = (props) => {
  return (
    <div className={classes["settings-page"]}>
      <header className={classes["settings-header__container"]}>
        <Link
          to="/profile"
          className={classes["settings-header__back-container"]}
        >
          <img
            src="/assets/icon_back.svg"
            alt="Back icon"
            className={classes["settings-header__back-icon"]}
          />
        </Link>

        <h1 className={classes["settings-header__heading"]}>Settings</h1>
      </header>

      <main className={classes["settings__container"]}>
        <div className={classes["settings__profile-pic-container"]}>
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/img/users/user-632c9bb775df8800160b005b-1664002368778.jpeg`}
            alt="Profile"
            className={classes["settings__profile-pic-image"]}
          />
        </div>

        <h2 className={classes["settings__profile-name"]}>Rayan Beigh</h2>

        <div className={classes["settings__profile-edit-btn-container"]}>
          <Link
            to="/settings/edit-profile"
            className={classes["settings__profile-edit-btn"]}
          >
            Edit Profile
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Settings;
