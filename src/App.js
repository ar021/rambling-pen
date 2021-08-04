import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import ShowPost from "./components/ShowPost/ShowPost";
import TittleBar from "./components/TittleBar/TittleBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className=""></header>
        <TittleBar />
        <NavBar />
        <Posts />
        <ProfileSection />
        <ShowPost />
      </div>
    );
  }
}

export default App;
