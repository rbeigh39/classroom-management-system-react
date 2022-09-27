import React, { useState } from "react";
import { Link } from "react-router-dom";

import SettingsFeatureItem from "../components/SettingsFeatureItem";

import classes from "../sass/pages/settings.module.scss";

const Settings = (props) => {
  return (
    <>
      <div className={classes["settings-page"]}>&nbsp;</div>

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
        <section className={classes["settings-profile__container"]}>
          <div className={classes["settings-profile__imgage-container"]}>
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/img/users/user-632c9bb775df8800160b005b-1664002368778.jpeg`}
              alt="Profile"
              className={classes["settings-profile__image"]}
            />
          </div>

          <h2 className={classes["settings-profile__name"]}>Rayan Beigh</h2>

          <div className={classes["settings-profile__edit-btn-container"]}>
            <Link
              to="/settings/edit-profile"
              className={classes["settings-profile__edit-btn"]}
            >
              Edit Profile
            </Link>
          </div>

          <div className={classes["settings-profile__status-container"]}>
            <p className={classes["settings-profile__status-item"]}>
              Email: rbeigh39@gmail.com
            </p>

            <p className={classes["settings-profile__status-item"]}>
              Role: admin
            </p>
          </div>
        </section>

        <section className={classes["settings-features"]}>
          <ul className={classes["settings-features__list"]}>
            <SettingsFeatureItem
              title="Change Password"
              link="/change-password"
              icon="icon_lock.svg"
            />

            <SettingsFeatureItem
              title="Logout"
              link="/logout"
              icon="icon_logout.svg"
            />
          </ul>
        </section>
      </main>
    </>
  );
};

export default Settings;
