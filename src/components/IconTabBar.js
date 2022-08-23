import React from "react";

import { useNavigate } from "react-router-dom";

import classes from "../sass/components/bottomTabBar.module.scss";

const IconTabBar = (props) => {
  const activeClass = props.isActive ? "tab-bar__icon--active" : "";
  const navigate = useNavigate();

  return (
    <div className={classes["tab-bar__icon-container"]}>
      <img
        src={`/assets/${props.icon}`}
        alt={`${props.iconAltName}`}
        className={`${classes["tab-bar__icon"]} ${classes[activeClass]}`}
        onClick={() => {
          props.setTarget(props.target);
          navigate(`/tab-pages/${props.target}`);
        }}
      />
      {/* <div
        className={`${classes["tab-bar__icon-active-dot"]} ${classes["tab-bar__icon-active-dot--active"]}`}
      >
        &nbsp;
      </div> */}
    </div>
  );
};

export default IconTabBar;
