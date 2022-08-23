import React from "react";
import classes from "../sass/pages/signup.module.scss";

const SignupInput = (props) => {
  return (
    <div className={classes["signup__input-container"]}>
      <label className={classes["signup__input-label"]}>{props.title}</label>
      <input
        type={props.type}
        className={classes["signup__input"]}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default SignupInput;
