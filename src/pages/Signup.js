import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import SignupInput from "../components/SignupInput";

import "../sass/styles";
import classes from "../sass/pages/signup.module.scss";
import AuthContext from "../store/authContext";

const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

const Signup = () => {
  const ctx = useContext(AuthContext);

  const [isValid, setIsValid] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const firstnameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastnameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const passwordConfirmChangeHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (
        isValidEmail(email) &&
        password === passwordConfirm &&
        password.length >= 8 &&
        firstName.length > 0 &&
        lastName.length > 0
      ) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }, 250);

    return () => {
      clearTimeout(identifier);
    };
  }, [firstName, lastName, password, passwordConfirm, email]);

  const signupSubmitHandler = (e) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`;
    ctx.signupHandler(fullName, email, password, passwordConfirm);
    console.log("signing up the user!");
  };

  return (
    <main className={classes["signup-page"]}>
      <div className={classes["signup__header"]}>
        <div className={classes["signup__logo-box"]}>
          <img
            src="/assets/pubble_full_logo.svg"
            alt="Pubble Logo"
            className={classes["signup__logo"]}
          />
        </div>
        <div className={classes["signup__login-link-box"]}>
          <Link to="/login" className={classes["signup__login-link"]}>
            Login
          </Link>
        </div>
      </div>

      <div className={classes["signup__body"]}>
        <h1 className={classes["signup__heading"]}>Signup for an account</h1>

        <form
          className={classes["signup__form-container"]}
          onSubmit={signupSubmitHandler}
        >
          <SignupInput
            title="First name"
            type="text"
            placeholder="Enter your first name"
            onChange={firstnameChangeHandler}
            value={firstName}
          />

          <SignupInput
            title="Last name"
            type="text"
            placeholder="Enter your last name"
            onChange={lastnameChangeHandler}
            value={lastName}
          />

          <SignupInput
            title="email"
            type="email"
            placeholder="Enter your email"
            onChange={emailChangeHandler}
            value={email}
          />

          <SignupInput
            title="Password"
            type="password"
            placeholder="Create a password"
            onChange={passwordChangeHandler}
            value={password}
          />

          <SignupInput
            title="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            onChange={passwordConfirmChangeHandler}
            value={passwordConfirm}
          />

          <Button isValid={isValid}>Create Account</Button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
