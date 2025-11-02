import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <div className="overlay"></div>

      <div className="dashboard-container">
        <div className="profile-card">
          <img
            src={userInfo?.image}
            alt={userInfo?.name}
            className="profile-img"
          />

          <h1 className="welcome">Welcome, {userInfo?.name} 👋</h1>
          <h3 className="email">{userInfo?.email}</h3>

          <p className="tagline">
            You are now successfully logged into your MERN Google Redirect App.
          </p>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <footer className="footer">
          Created by <span>Parmar Mohit</span>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
