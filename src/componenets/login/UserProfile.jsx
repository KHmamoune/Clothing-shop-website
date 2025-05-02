import React, { useContext } from 'react';
import './UserProfile.css';
import { MyContext } from '../../MyContext';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

const UserProfile = () => {
    const Navigate = useNavigate()
    const { contextInfo } = useContext(MyContext)
    const userData = contextInfo
    console.log(contextInfo)

    const handleLogout = () => {
        Cookies.remove("authToken")
        Navigate('/')
        window.location.reload()
    }

  return (
    <div className="user-profile-container">
      <div className="user-profile-header">
        <div className="user-profile-avatar">
          {userData.first_name.charAt(0)}{userData.last_name.charAt(0)}
        </div>
        <h2 className="user-profile-name">{userData.first_name} {userData.last_name}</h2>
        <span className="user-profile-username">@{userData.username}</span>
      </div>

      <div className="user-profile-details">
        <div className="user-profile-detail">
          <label>Email</label>
          <p>{userData.email}</p>
        </div>

        <div className="user-profile-detail">
          <label>Phone</label>
          <p>{userData.phone_number}</p>
        </div>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default UserProfile;
