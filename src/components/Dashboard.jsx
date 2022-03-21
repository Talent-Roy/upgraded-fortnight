import React, { useState } from "react";
import { Alert, Card } from "@mui/material";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch (error) {
      setError("failed to log out");
    }
  }

  return (
    <div>
      <Card>
        <h1>welcome to your dashboard</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <p>{currentUser.email}</p>
      </Card>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default Dashboard;
