import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: (email, password) => {},
  signupHandler: (name, email, password, passwordConfirm) => {},
  logoutHandler: () => {},
  user: {},
});

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const isLoggedInInfo = localStorage.getItem("isLoggedIn");
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const userRoleInfo = localStorage.getItem("userRole");

    if (!isLoggedInInfo || !userInfo || !userRoleInfo) {
      setIsLoggedIn(false);
      setUser(null);
      setUserRole(null);

      navigate("/login");
      return;
    }

    if (isLoggedInInfo === "true") setIsLoggedIn(true);
    setUser(userInfo);
    setUserRole(userRoleInfo);

    navigate("/tab-pages/home");

    // console.log("from the use effect", isLoggedInInfo);
    // console.log("from the use effect", userInfo);
    // console.log("from the use effect", userRoleInfo);
  }, []);

  const loginHandler = async (email, password) => {
    try {
      const res = await axios({
        method: "POST",
        withCredentials: true,
        url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/login`,
        data: {
          email,
          password,
        },
      });

      const user = res.data.data.user;

      setIsLoggedIn(true);
      setUser(user);
      setUserRole(user.role);

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userRole", user.role);

      navigate("/tab-pages/home");
    } catch (err) {
      console.log(err);
      window.alert(err.response.data.message);
    }
  };

  const signupHandler = async (name, email, password, passwordConfirm) => {
    try {
      const res = await axios({
        method: "POST",
        withCredentials: true,
        url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/signup`,
        data: {
          name,
          email,
          password,
          passwordConfirm,
        },
      });

      const user = res.data.data.user;

      setIsLoggedIn(true);
      setUser(user);
      setUserRole(user.role);

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userRole", user.role);

      navigate("/tab-pages/home");
    } catch (err) {
      console.log(err);
      window.alert(err.response.data.message);
    }
  };

  const logoutHandler = async () => {
    try {
      await axios({
        method: "GET",
        withCredentials: true,
        url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/logout`,
      });

      setIsLoggedIn(false);
      setUser(null);
      setUserRole(null);

      localStorage.setItem("isLoggedIn", false);
      localStorage.removeItem("user");
      localStorage.removeItem("userRole");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loginHandler,
        signupHandler,
        logoutHandler,
        user,
        userRole,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
