import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../store/authContext";

import BottomTabBar from "./BottomTabBar";
import FAB from "./FAB";

const TabsContainer = () => {
  const authCtx = useContext(AuthContext);

  const showFab =
    authCtx.userRole === "faculty" ||
    authCtx.userRole === "cr" ||
    authCtx.userRole === "admin";

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Outlet />
      {showFab && <FAB />}
      <BottomTabBar />
    </div>
  );
};

export default TabsContainer;
