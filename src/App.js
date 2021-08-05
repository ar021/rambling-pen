import React, { Component } from "react";
import "./App.css";
import postService from "./services/postService";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import ShowPost from "./components/ShowPost/ShowPost";
import TittleBar from "./components/TittleBar/TittleBar";
import CreatePost from "./components/CreatePost/CreatePost";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const posts = await postService.getAll();
    this.setState({ posts });
  }

  handleAddPost = async (newPostData) => {
    const newPost = await postService.create(newPostData);
    debugger;
    this.setState(
      (state) => ({
        posts: [...state.posts, newPost],
      }),
      () => this.props.history.push("/")
    );
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <header className=""></header>
        <TittleBar />
        <NavBar />
        <Posts posts={posts} />
        <ProfileSection />
        <ShowPost />
        <CreatePost handleAddPost={this.handleAddPost} />
      </div>
    );
  }
}

export default App;
