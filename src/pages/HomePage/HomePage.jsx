import React from "react";
import Posts from "../../components/Posts/Posts";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import TittleBar from "../../components/TittleBar/TittleBar";
import "./HomePage.css";

export default function HomePage({ posts }) {
  return (
    <>
      <TittleBar />
      <div className="displayPost">
        <Posts posts={posts} />
        <ProfileSection />
      </div>
    </>
  );
}
