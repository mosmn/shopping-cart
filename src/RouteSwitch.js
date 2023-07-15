import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import Post from "./components/Post";
import PostLayout from "./components/PostLayout";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <nav>
            <ul>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            </ul>
        </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<PostLayout />}>
            <Route index element={<Profile />} />
            <Route path=":id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;