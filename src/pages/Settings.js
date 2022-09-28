import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SettingsFeatureItem from "../components/SettingsFeatureItem";
import AuthContext from "../store/authContext";

import classes from "../sass/pages/settings.module.scss";

const Settings = (props) => {
  const authCtx = useContext(AuthContext);

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
              src={`${process.env.REACT_APP_BACKEND_URL}/img/users/${
                authCtx.user && authCtx.user.photo
              }`}
              alt="Profile"
              className={classes["settings-profile__image"]}
            />
          </div>

          <h2 className={classes["settings-profile__name"]}>
            {authCtx.user && authCtx.user.name}
          </h2>

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
              Email: {authCtx.user && authCtx.user.email}
            </p>

            <p className={classes["settings-profile__status-item"]}>
              Role: {authCtx.user && authCtx.user.role}
            </p>
          </div>
        </section>

        <section className={classes["settings-features"]}>
          <ul className={classes["settings-features__list"]}>
            <SettingsFeatureItem
              title="Change Password"
              link="/change-password"
              icon="icon_lock.svg"
              type="link"
            />

            <SettingsFeatureItem
              title="Logout"
              link="/logout"
              icon="icon_logout.svg"
              type="button"
              onClick={authCtx.logoutHandler}
            />
          </ul>
        </section>
      </main>
    </>
  );
};

export default Settings;
