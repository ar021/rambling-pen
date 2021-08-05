import React, { Component } from "react";

class CreatePost extends Component {
  state = {
    invalidForm: true,
    formData: {
      tittle: "",
      description: "",
      // image: '',
      category: "",
    },
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddPost(this.state.formData);
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
      <div>
        <h1>Write a Blog</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Tittle (required)</label>
            <input
              className="form-control"
              name="tittle"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              className="form-control"
              name="category"
              value={this.state.formData.category}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              name="image"
              value={this.state.formData.image}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description(required)</label>
            <textarea
              className="form-control"
              name="description"
              type="textfield"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
