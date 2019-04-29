import React, { Component } from 'react';
import './newPost.scss';

export default class NewPost extends Component {
  state = {
    picture: '',
    text: '',
    tags: '',
  };

  handleClick = () => {
    const postsData = JSON.parse(localStorage.getItem('postsData'));
    const { picture, text, tags } = this.state;

    const newPost = {
      id: postsData.length + 1,
      text,
      picture,
      tags,
    };

    this.setState({
      picture: '',
      text: '',
      tags: '',
    });

    const newPostsData = [newPost, ...postsData];

    localStorage.setItem('postsData', JSON.stringify(newPostsData));

    this.props.onUpdate(newPostsData);
  };

    pictureChange = (event) => {
      this.setState({ picture: event.target.value });
    };

    textChange = (event) => {
      this.setState({ text: event.target.value });
    };

    tagsChange = (event) => {
      this.setState({ tags: event.target.value });
    };

    render() {
      const { picture, text, tags } = this.state;

      return (
        <div className="add-post">
          <form className="">
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
              <button className="btn" type="submit" onClick={this.handleClick}>
                <i className="fa fa-plus-circle" />
              </button>
            </div>
          </form>
        </div>
      );
    }
}
