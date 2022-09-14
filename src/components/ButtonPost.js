import React from "react";

import classes from "../sass/components/buttonPost.module.scss";

const ButtonPost = (props) => {
  return (
    <button
      disabled={!props.isValid}
      className={`${classes["btn-post"]}  ${
        props.isValid ? "" : classes["inactive"]
      }`}
      onClick={(e) => {
        e.preventDefault();
        props.onClickHandler();
      }}
    >
      {props.children}
    </button>
  );
};

export default ButtonPost;
