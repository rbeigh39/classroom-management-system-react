import React from "react";

import classes from "../sass/components/button.module.scss";

const Button = (props) => {
  return (
    <button
      disabled={!props.isValid}
      className={`u-margin-top-medium  ${classes["btn-primary"]}  ${
        props.isValid ? "" : classes["inactive"]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
