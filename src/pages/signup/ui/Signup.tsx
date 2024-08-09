import React, { useState } from "react";
import { useAuth } from "@/shared/providers/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.sass";
import logoImage from "@/assets/defaultLogoSignup.png";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!acceptedTerms) {
      setError("You must accept the terms and conditions.");
      return;
    }
    setError(null);
    register(username, email, password);
    navigate("/dashboard");
  };

  return (
    <div className={styles["page-container"]}>
      <img
        src={logoImage}
        className={styles.defaultLogoSignup}
        alt="default-logo-signup"
      />
      <form className={styles["form-container"]} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles["checkbox-container"]}>
          <input
            type="checkbox"
            id="acceptedTerms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
          />
          <label htmlFor="acceptedTerms">
            I accept the terms and conditions
          </label>
        </div>
        {error && <div className={styles["error-message"]}>{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
