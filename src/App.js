import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import postService from "./services/postService";
import NavBar from "./components/NavBar/NavBar";
import CreatePost from "./components/CreatePost/CreatePost";
import HomePage from "./pages/HomePage/HomePage";
import ShowPage from "./pages/ShowPage/ShowPage";
import EditPostPage from "./pages/EditPostPage/EditPostPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  handleAddPost = async (newPostData) => {
    const newPost = await postService.create(newPostData);
    this.setState(
      (state) => ({
        posts: [...state.posts, newPost],
      })
      // Using cb to wait for state to update before rerouting
      // () => this.props.history.push("/")
    );
  };

  handleDeletePost = async (id) => {
    await postService.deleteOne(id);
    this.setState(
      (state) => ({
        // Yay, filter returns a NEW array
        posts: state.posts.filter((p) => p._id !== id),
      })
      // () => this.props.history.push("/")
    );
  };

  handleUpdatePost = async (updatedPostData) => {
    const updatedPost = await postService.update(updatedPostData);
    const newPostsArray = this.state.posts.map((p) =>
      p._id === updatedPost._id ? updatedPost : p
    );
    this.setState({ posts: newPostsArray });
  };

  async componentDidMount() {
    const posts = await postService.getAll();
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage posts={posts} />}
            ></Route>
            <Route
              exact
              path="/details"
              render={(location) => (
                <ShowPage
                  location={location}
                  handleDeletePost={this.handleDeletePost}
                />
              )}
            ></Route>
            <Route
              exact
              path="/add"
              render={({ history }) => (
                <CreatePost
                  handleAddPost={this.handleAddPost}
                  history={history}
                />
              )}
            ></Route>
            <Route
              exact
              path="/edit"
              render={({ location, history }) => (
                <EditPostPage
                  handleUpdatePost={this.handleUpdatePost}
                  location={location}
                  history={history}
                />
              )}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
