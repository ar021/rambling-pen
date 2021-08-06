import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import postService from "./services/postService";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import ShowPost from "./components/ShowPost/ShowPost";
import TittleBar from "./components/TittleBar/TittleBar";
import CreatePost from "./components/CreatePost/CreatePost";
import HomePage from "./pages/HomePage/HomePage";
import ShowPage from "./pages/ShowPage/ShowPage";

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
            <Route exact path="/details" render={() => <ShowPage />}></Route>
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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
