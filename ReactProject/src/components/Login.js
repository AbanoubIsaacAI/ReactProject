import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./User";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isUserRegistered } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isUserRegistered(username, password)) {
      setError("Invalid username or password. Please sign up first.");
      return;
    }

    console.log("Logging in...");
    navigate("/products");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #3b82f6, #ec4899)" }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ width: "350px", borderRadius: "10px" }}
      >
        <h3 className="text-center fw-bold">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Type your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button
            className="btn w-100 mt-3 text-white"
            style={{ background: "linear-gradient(90deg, #3b82f6, #ec4899)" }}
          >
            LOGIN
          </button>
          <div className="text-center mt-3">
            <span>Don't have an account?</span>
            <a href="/signup" className="d-block text-decoration-none fw-bold">
              SIGN UP
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
