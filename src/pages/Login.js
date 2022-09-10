import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

import classes from "../sass/pages/login.module.scss";
import AuthContext from "../store/authContext";

const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

const Login = () => {
  const ctx = useContext(AuthContext);

  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsValid(isValidEmail(email) && password.length >= 8);
    }, 250);

    return () => {
      clearTimeout(identifier);
    };
  }, [email, password]);

  const submitHandler = (e) => {
    e.preventDefault();

    ctx.loginHandler(email, password);
  };

  return (
    <main className={classes["login-page"]}>
      <div className={classes["signup-link__container"]}>
        <Link to="/signup" className={classes["signup-link__link"]}>
          Sign up
        </Link>
      </div>

      <div className={classes["login__container"]}>
        <div className={classes["login-header"]}>
          <img
            src="/assets/pubble_logo.svg"
            alt="Pubble Logo"
            className={classes["login__logo"]}
          />
          <h1 className={classes["login__heading"]}>
            Login to <span>Pubble</span>
          </h1>
        </div>

        <div className={classes["login-form__container"]}>
          <form
            className={classes["login-form__form"]}
            onSubmit={submitHandler}
          >
            <label
              htmlFor="email"
              className={classes["login-form__input-label"]}
            >
              Email Address
            </label>
            <input
              type="email"
              validate="validate"
              required="required"
              id="email"
              className={classes["login-form__input"]}
              onChange={emailChangeHandler}
            />

            <label
              htmlFor="password"
              className={classes["login-form__input-label"]}
            >
              Password
            </label>
            <input
              type="password"
              validate="validate"
              required="required"
              id="password"
              className={classes["login-form__input"]}
              onChange={passwordChangeHandler}
            />

            <Button isValid={isValid}>Login</Button>
          </form>
          <Link
            to="/forgotPassword"
            className={`u-margin-top-medium ${classes["forgot-password"]}`}
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
