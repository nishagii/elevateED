import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavigation from '../../Components/SideNavigation/SideNavigation';
import Header from '../../Components/Header/Header';
import './SiteHome.css';

export default function SiteHome() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <Header />
      <div className="landing-content">
        <SideNavigation />

        <main className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Elevate Your Learning Journey</h1>
              <p>Master in-demand skills with our expert-led courses</p>
              <button className="cta-button" onClick={() => navigate('/courses')}>
                Explore Courses
              </button>
            </div>
            <div className="hero-image">
              <img src="https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg" alt="Learning illustration" />
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Interactive Learning</h3>
              <p>Learn by doing with hands-on projects</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-certificate"></i>
              <h3>Certified Courses</h3>
              <p>Earn recognized certificates</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
