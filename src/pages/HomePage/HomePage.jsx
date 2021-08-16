import React from "react";
import Posts from "../../components/Posts/Posts";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import TittleBar from "../../components/TittleBar/TittleBar";
import "./HomePage.css";

export default function HomePage({ posts, user }) {
  return (
    <>
      <TittleBar />
      <div className="displayPost">
        <Posts posts={posts} />
        {/* {user ? <ProfileSection user={user} /> : null} */}
      </div>
    </>
  );
}
