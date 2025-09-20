import React, { useState } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContentPaste } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuTableOfContents } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { logout } from "../feature/auth/userSlice";
import { AiOutlineTeam } from "react-icons/ai";
import { useDispatch } from "react-redux";

const MainLayout = () => {
  const [active, setActive] = useState("dashboard");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="main-container">
      <div className="main-container-1">
        <div className="logo-info">
          <span>
            <MdOutlineAdminPanelSettings className="logo-icon" />
          </span>
          Admin
        </div>
        <hr className="fading-line" />
        <ul className="root-list">
          <Link
            to="/admin"
            className={`nav-btn ${active === "dashboard" ? "active" : ""}`}
            onClick={() => setActive("dashboard")}
          >
            <LuLayoutDashboard className="icon" />
            Dashboard
          </Link>
          <Link
            to="profile"
            className={`nav-btn ${active === "profile" ? "active" : ""} `}
            onClick={() => setActive("profile")}
          >
            <CgProfile className="icon" />
            Profile
          </Link>
          <Link
            to="interviews"
            className={`nav-btn ${active === "interviews" ? "active" : ""}`}
            onClick={() => setActive("interviews")}
          >
            <MdContentPaste className="icon" />
            My Interviews
          </Link>
          <Link
            to="history"
            className={`nav-btn ${active === "history" ? "active" : ""}`}
            onClick={() => setActive("history")}
          >
            <LuTableOfContents className="icon" />
            History
          </Link>
          <Link
            to="team"
            className={`nav-btn ${active === "team" ? "active" : ""}`}
            onClick={() => setActive("team")}
          >
            <AiOutlineTeam className="icon" />
            Our Team
          </Link>
          <Link to="/" className="nav-btn logout-btn" onClick={handleLogout}>
            <RiLogoutCircleLine className="icon" />
            Logout
          </Link>
        </ul>
      </div>
      <div className="main-container-2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
