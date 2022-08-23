import React from "react";
import { Outlet } from "react-router-dom";

import BottomTabBar from "./BottomTabBar";
import FAB from "./FAB";

const TabsContainer = () => {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Outlet />
      <FAB />
      <BottomTabBar />
    </div>
  );
};

export default TabsContainer;
