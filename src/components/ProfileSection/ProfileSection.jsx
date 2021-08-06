import React from "react";
import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <div className="profileSection">
      <div className="profileSectionItem">
        <span className="profileSectionTittle">ABOUT ME</span>
        <img
          src="https://neilpatel.com/wp-content/uploads/2017/09/become-better-blogger.jpg.webp"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          quisquam ullam sit ea
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
          <i className="socialMediaIcon fab fa-pinterest-square"></i>
          <i className="socialMediaIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
