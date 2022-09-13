import React from "react";
import { Link } from "react-router-dom";

import ButtonPost from "./ButtonPost";

import classes from "../sass/components/createHeader.module.scss";

const CreateHeader = (props) => {
  return (
    <div className={classes["create-header__container"]}>
      <div className={classes["create-header__icon-close-container"]}>
        <Link to={props.backLink}>
          <img
            src="/assets/icon_close.svg"
            alt="Close"
            className={classes["create-header__icon-close"]}
          />
        </Link>
      </div>

      <figure className={classes["create-header__logo-container"]}>
        <img
          src="/assets/pubble_logo.svg"
          alt="Logo"
          className={classes["create-header__logo"]}
        />
      </figure>

      <div className={classes["create-header__button-container"]}>
        <ButtonPost
          btnIsActive={props.btnIsActive}
          isValid={props.btnIsActive}
          onClickHandler={props.btnOnLickHandlerFn}
        >
          Post
        </ButtonPost>
      </div>
    </div>
  );
};

export default CreateHeader;
