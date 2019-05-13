import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts";
import "./newPost.scss";

class NewPost extends Component {
  state = {
    picture: "",
    text: "",
    tags: ""
  };

  handleClick = () => {
    const { picture, text, tags } = this.state;

    const newPost = [
      {
        id: Math.floor(Math.random(0,1)*10000),
        text,
        picture,
        tags
      }
    ];

    this.setState({
      picture: "",
      text: "",
      tags: ""
    });

    this.props.addPost(newPost);
  };

  isDisabled = () => {
    const { text, picture, tags } = this.state;
    return !(text && picture && tags);
  };

  pictureChange = event => {
    this.setState({ picture: event.target.value });
  };

  textChange = event => {
    this.setState({ text: event.target.value });
  };

  tagsChange = event => {
    this.setState({ tags: event.target.value });
  };

  render() {
    const { picture, text, tags } = this.state;

    return (
      <div className="add-post">
        <div>
          <input
            name="picture"
            placeholder="Picture link"
            value={picture}
            onChange={this.pictureChange}
          />
        </div>
        <div>
          <input
            name="text"
            placeholder="Text"
            value={text}
            onChange={this.textChange}
          />
        </div>
        <div>
          <input
            name="tags"
            placeholder="Tags"
            value={tags}
            onChange={this.tagsChange}
          />
        </div>
        <div className="add-post-button">
          <button
            className="btn"
            onClick={this.handleClick}
            disabled={this.isDisabled()}
          >
            <i className="fa fa-plus-circle" />
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (newPost) => dispatch(addPost(newPost))
  }
}

export default connect(null, mapDispatchToProps)(NewPost)
