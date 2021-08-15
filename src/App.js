import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import postService from "./services/postService";
import NavBar from "./components/NavBar/NavBar";
import CreatePost from "./components/CreatePost/CreatePost";
import HomePage from "./pages/HomePage/HomePage";
import ShowPage from "./pages/ShowPage/ShowPage";
import EditPostPage from "./pages/EditPostPage/EditPostPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import userService from "./services/userService";
import LoginPage from "./pages/LoginPage/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: userService.getUser(),
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
    const postArry = this.state.user.posts;
    const includes = postArry.includes(id);
    if (includes) {
      this.setState((state) => ({
        posts: state.posts.filter((p) => p._id !== id),
      }));
    }
  };

  handleUpdatePost = async (updatedPostData) => {
    const updatedPost = await postService.update(updatedPostData);
    const newPostsArray = this.state.posts.map((p) =>
      p._id === updatedPost._id ? updatedPost : p
    );
    this.setState({ posts: newPostsArray });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {
    const posts = await postService.getAll();
    this.setState({ posts });
  }

  render() {
    const { posts, user } = this.state;

    return (
      <div className="App">
        <Router>
          <NavBar user={user} handleLogout={this.handleLogout} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage posts={posts} user={user} />}
            ></Route>
            <Route
              exact
              path="/details"
              render={(location) => (
                <ShowPage
                  location={location}
                  user={user}
                  handleDeletePost={this.handleDeletePost}
                />
              )}
            ></Route>
            <Route
              exact
              path="/add"
              render={({ history }) =>
                user ? (
                  <CreatePost
                    handleAddPost={this.handleAddPost}
                    history={history}
                    user={user}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            ></Route>
            <Route
              exact
              path="/edit"
              render={({ location, history }) =>
                user ? (
                  <EditPostPage
                    handleUpdatePost={this.handleUpdatePost}
                    location={location}
                    history={history}
                    user={user}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            ></Route>
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            ></Route>
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
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
