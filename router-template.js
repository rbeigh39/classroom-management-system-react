import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />

      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>This is the Home route!</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>This is the Learn Component!</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">
        Courses
      </Link>
      |
      <Link className="btn btn-primary" to="/learn/bundles">
        Bundle
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courses = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourse = courses[Math.floor(Math.random() * courses.length)];

  return (
    <div>
      <h1>Courses List</h1>
      <h4>Courses Card</h4>

      <p>More test:</p>

      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourse}`}
      >
        {randomCourse}
      </NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/test`}>
        Test
      </NavLink>

      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles List</h1>
      <h4>Bundles Card</h4>
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();

  return (
    <div>
      <h1>URL Params is: {courseid}</h1>
      <button
        onClick={() => navigate("/dashboard", { state: "399" })}
        className="btn btn-warning"
      >
        Price
      </button>
      <Link to="/dashboard" state={"DJANGO"}>
        Test Link
      </Link>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();

  return (
    <div>
      <h1>Info that I got here is: {location.state} </h1>
    </div>
  );
}

reportWebVitals();
