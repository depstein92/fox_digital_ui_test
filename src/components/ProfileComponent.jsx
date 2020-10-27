import React from 'react';
import ProfileImage from '../assets/profile_image.jpg'
import DefaultProfileImage from '../assets/default-profile-2.png';

const ProfileComponent = () => (
    <div className="profile">
      {// <img src={ProfileImage} className="profile__profile-image"></img>
      }
      <div className="profile__profile-header-container">
        <img src={DefaultProfileImage} alt="Default Profile Image"/>
      </div>
      <div className="profile__profile-user-information">
        <div className="profile__profile-name">Filip Martin Jose</div>
        <div className="profile__profile-location">Los Angeles</div>
        <button className="profile__profile-button">
          Pro Level
        </button>  
      </div>
      <div className="profile__profile-information">
          <div className="profile__profile-followers">
            <div className="profile__profile-followers-title">Followers</div>
            <div className="profile__profile-followers-number">980</div>
          </div>
          <div className="profile__projects">
            <div className="profile__projects-title">Projects</div>
            <div className="profile__projects-number">142</div>
          </div>
          <div className="profile__rank">
            <div className="profile__rank-title">Rank</div>
            <div className="profile__rank-number">129</div>
          </div>
      </div>
    </div>
);

export default ProfileComponent;