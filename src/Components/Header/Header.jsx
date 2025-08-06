import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signUp');
  };

  const handleLogout = () => {
    // Add your logout logic here
    setIsLoggedIn(false);
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-left">
        <div className="logo-container">
          <div className="logo">E</div>
        </div>
        <h1 className="platformTitle">ElevatEd</h1>
        <span className="platform-tagline">Elevate Your Learning Journey</span>
      </div>

      <nav className="header-nav">
        <ul className="nav-links">
          <li>
            <a
              href="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/courses"
              className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('/courses');
              }}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/resources"
              className={`nav-link ${isActive('/resources') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('#');
              }}
            >
              Resources
            </a>
          </li>
        </ul>
      </nav>


      <div className="header-right">
        {isLoggedIn ? (
          <div className="user-profile">
            <div className="notification-icon">
              <span className="notification-badge">3</span>
              <i className="fa fa-bell"></i>
            </div>
            <div className="user-info" onClick={handleProfileClick}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd92665210d20b020830dbfb07744720d40a8333ea96946b6f9e8065ce70b8d0?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
                alt="User profile"
                className="userAvatar"
              />
              <div className="user-details">
                <span className="username">Chathuni Rathnayake</span>
                <span className="user-role">Student</span>
              </div>
            </div>
            <button className="logout-button" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button className="login-button" onClick={handleLogin}>Log In</button>
            <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;