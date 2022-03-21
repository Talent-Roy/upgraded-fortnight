import React, { useRef, useState } from "react";
import { useAuth } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";
import "../static/styles/components/signup.scss";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signup, currentUser } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log(passwordRef.current.value);
      return setError("passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (error) {
      setError("failed to register user");
    }
  }

  return (
    <div className="reg_cont">
      {/* {currentUser.email} */}
      <form onSubmit={handleSubmit}>
        <h2 className="title">Register</h2>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <label className="">Your Email</label>
        <input type="email" name="email" id="email" ref={emailRef} />

        <label className="text-muted">Your Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <label className="text-muted">Confirm Password</label>

        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          ref={passwordConfirmRef}
        />
        <button disabled={loading} className="px-5 mt-3">
          Register
        </button>
      </form>

      <p className="">
        Have an account? <Link to="/login">sign in</Link>
      </p>
    </div>
  );
};

export default Signup;
