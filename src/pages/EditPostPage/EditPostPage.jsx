import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditPostPage.css";

class EditPostPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.post,
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdatePost(this.state.formData);
    this.props.history.push("/");
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <div className="createPostForm">
        <div className="formTittle">
          <span>Edit a Blog</span>
        </div>
        <img
          className="formImg"
          src="https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
          alt=""
        />
        <form
          className="postForm container"
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">Tittle </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                name="tittle"
                value={this.state.formData.tittle}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">Category</label>
            <div class="col-sm-10">
              <input
                className="form-control"
                name="category"
                value={this.state.formData.category}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <textarea
                className="form-control"
                name="description"
                type="textfield"
                value={this.state.formData.description}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label class="col-sm-2 col-form-label">Image</label>
            <div class="col-sm-10">
              <input
                className="form-control"
                name="image"
                value={this.state.formData.image}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="frame">
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
              class="custom-btn btn-16"
            >
              Update
            </button>
            <Link className="cancelLink " to="/">
              <button className="btn" class="custom-btn btn-16">
                Cancel
              </button>
              {/* <i className="cancelLink far fa-window-close"></i> */}
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPostPage;
