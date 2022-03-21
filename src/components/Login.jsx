import React, { useRef, useState } from "react";
import { useAuth } from "../context/UserContext";
import "../static/styles/components/login.scss";
import { Alert, AlertTitle, Card, FormControl } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value);

      console.log(emailRef.current.value);

      navigate("/dashboard");
    } catch (error) {
      setError("failed to sign in");
    }
  }

  return (
    <div className="login_cont">
      <div>
        <form onSubmit={handleSubmit}>
          <h2 className="title text-center text-white pb-3 ">Log in</h2>
          {error && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          <label className="text-muted">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            ref={emailRef}
          />

          <label className="text-muted">Your Password</label>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            ref={passwordRef}
          />
          <button disabled={loading} className="">
            Register
          </button>
        </form>
      </div>

      <p className="text-center">
        Don't have an account? <Link to="/signup">sign up</Link>
      </p>
    </div>
  );
};

export default Login;
