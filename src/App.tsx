import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/home.page";
import About from "./pages/about/test";
import LoginPage from "./pages/auth/login/login.page";
import Profile from "./pages/profile/profile.page";
import WagePage from "./pages/wage/wage";
import NotificationPage from "./pages/notification/notify.page";
import { router } from "./routes/routes";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" Component={Home} />
    //     <Route path="/home" Component={Home} />
    //     <Route path="/home/:path" Component={Profile} />
    //     <Route path="/profile" Component={Profile} />
    //     <Route path="/profile/:path" Component={Profile} />
    //     <Route path="/wage" Component={WagePage} />
    //     <Route path="/wage/:path" Component={WagePage} />
    //     <Route path="/notification" Component={NotificationPage} />
    //     <Route path="/notification/:path" Component={NotificationPage} />
    //     <Route path="/login" Component={LoginPage} />
    //     <Route path="/about" Component={About} />
    //     <Route Component={NotFound} />
    //   </Routes>
    // </Router>

    <RouterProvider router={router} />
  );
}

function NotFound() {
  return <div>not foun</div>;
}

export default App;
