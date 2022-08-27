import React from "react";
import "./sass/styles";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Outlet,
  // Navigate,
  // Link,
} from "react-router-dom";

import TabsContainer from "./components/TabsContainer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Notifications from "./pages/Notifications";
import CreateNotifications from "./pages/CreateNotifications";
import Resources from "./pages/Resources";
import CreateResources from "./pages/CreateResource";
import Briefings from "./pages/Briefiings";
import DiscussionForm from "./pages/DiscussionForum";
import CommentsTab from "./pages/CommentsTab";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tab-pages" element={<TabsContainer />}>
          <Route path="home" element={<Feed />}>
            <Route path="comment-tab" element={<CommentsTab />} />
          </Route>
          <Route path="notifications" element={<Notifications />} />
          <Route path="resources" element={<Resources />} />
          <Route path="briefings" element={<Briefings />} />
          <Route path="forum" element={<DiscussionForm />} />
        </Route>

        <Route path="/create-notification" element={<CreateNotifications />} />
        <Route path="/create-resources" element={<CreateResources />} />
      </Routes>
    </Router>
  );
}

export default App;
