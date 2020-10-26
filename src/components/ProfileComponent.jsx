import React from 'react';

const ProfileComponent = () => (
    <div className="profile">
      <div className="profile__background-container">
        <img src="" alt=""/>
      </div>
      <div className="profile__profile-user-information">
        <div className="profile__profile-name">Filip Martin Jose</div>
        <div className="profile__profile-location">Los Angeles</div>
        <button>Pro Level</button>  
      </div>
      <div className="profile__profile-information">
          <div className="profile__profile-followers">
            <div className="profile__followers-title">Followers</div>
            <div className="profile__followers">980</div>
          </div>
          <div className="profile__projects">
            <div className="profile__projects-title">Projects</div>
            <div className="profile__projects">142</div>
          </div>
          <div className="profile__rank">
            <div className="profile__rank-title">Rank</div>
            <div className="profile__rank">129</div>
          </div>
      </div>
    </div>
);

export default ProfileComponent;