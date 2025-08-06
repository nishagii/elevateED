import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="pageContainer">
      <div className="contentWrapper">
        <div className="rowContainer">
          <div className="formColumn">
            <form className="formContainer" onSubmit={handleSubmit}>
              <h2 className="formTitle">Welcome Back!</h2>

              <div className="inputGroup">
                <input
                  type="text"
                  name="username"
                  className="inputField"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="inputGroup">
                <div className="passwordField">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="inputField"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="passwordToggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button type="submit" className="submitButton">
                Log In
              </button>

              <div className="signupSection">
                <span>Don't have an account?</span>
                <button type="button" className="signupLink" onClick={() => navigate('/signup')}>
                  Sign up
                </button>
              </div>
            </form>
          </div>

          <div className="imageColumn">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
              alt="Login illustration"
              className="loginImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
