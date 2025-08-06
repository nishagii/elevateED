import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import SideNavigation from "../../Components/SideNavigation/SideNavigation";
import { useEnrollment } from '../../Context/EnrollmentContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dashboard.css';

const initialProfileData = [
  { label: "Name:", value: "Chathuni Rathnayake" },
  { label: 'User name:', value: 'Chathuni5291' },
  { label: 'Email address:', value: 'chathuniratnayake@gmail.com' }
];

export default function Dashboard() {
  const { enrolledCourses } = useEnrollment();
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  const handleUsernameChange = () => {
    if (newUsername.trim()) {
      const updatedProfileData = profileData.map(item =>
        item.label === 'User name:' ? { ...item, value: newUsername } : item
      );
      setProfileData(updatedProfileData);
      setIsEditing(false);
      setNewUsername('');

      toast.success('Username updated successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px',
          padding: '16px',
          minWidth: '400px'
        },
      });
    }
  };

  return (
    <main className="all">
      <Header />
      <div className="contentContainer">
        <SideNavigation />
        <div className="dashboardContent">
          <section className="profileSection">
            <h2 className="title">Profile</h2>
            <div className="alldetails">
              <div>
                <h3 className="settingsTitle">Settings</h3>
                {isEditing ? (
                  <div className="usernameEditContainer">
                    <input
                      type="text"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      className="usernameInput"
                      placeholder="Enter new username"
                    />
                    <button className="saveUsernameBtn" onClick={handleUsernameChange}>
                      Save
                    </button>
                    <button className="cancelBtn" onClick={() => setIsEditing(false)}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button className="changeUsername" onClick={() => setIsEditing(true)}>
                    Change user name
                  </button>
                )}
              </div>
              <img src="/images/profile.jpg" className="profilepic" alt="Profile" />
              <div className="profile-box">
                {profileData.map((item, index) => (
                  <div key={index} className="profile-item">
                    <div className="profile-label">{item.label}</div>
                    {item.value}
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="enrolledCoursesSection">
            <h2 className="title">My Enrolled Courses</h2>
            {enrolledCourses.length === 0 ? (
              <p className="enrolledCourses">No enrolled courses yet</p>
            ) : (
              <div className="enrolledCoursesGrid">
                {enrolledCourses.map((course, index) => (
                  <div key={index} className="enrolledCourse">
                    <img src={course.image} alt={course.title} />
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <button className="startLearningBtn">Start Learning</button>
                  </div>
                ))}
              </div>
            )}
          </section>

         
          <ToastContainer />
        </div>
      </div>
    </main>
  );
}
