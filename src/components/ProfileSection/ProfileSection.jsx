import React from "react";
import "./ProfileSection.css";

const ProfileSection = ({ user }) => {
  return (
    <div className="profileSection">
      <div className="profileSectionItem">
        <span className="profileSectionTittle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2915&q=80"
          alt=""
        />
        <div className="userName">{user ? user.name : null}</div>
        <p>
          Arya Stark is the third child of Eddard Stark and Catelyn Stark. After
          narrowly escaping the persecution of House Stark by House Lannister,
          Arya is trained as a Faceless Man at the House of Black and White in
          Braavos, and uses her new skills to bring those who have wronged her
          family to justice.
        </p>
      </div>
      {/* <div className="profileSectionItem">
        <span className="profileSectionTittle">CATEGORIES</span>
        <ul className="categoryList">
          <li className="categoryListItem">Tech</li>
          <li className="categoryListItem">Life</li>
          <li className="categoryListItem">Sports</li>
        </ul>
      </div> */}
      <div className="profileSectionItem">
        <span className="profileSectionTittle">FOLLOW ME</span>
        <div className="socialMedia">
          <i className="socialMediaIcon fab fa-facebook-square"></i>
          <i className="socialMediaIcon fab fa-instagram-square"></i>
          <i className="socialMediaIcon fab fa-twitter-square"></i>
          <i className="socialMediaIcon fab fa-youtube-square"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
