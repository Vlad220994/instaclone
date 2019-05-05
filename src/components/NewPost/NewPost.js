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
    const count = (postsData && postsData.length) || 0;

    const newPost = [{
      id: count + 1,
      text,
      picture,
      tags,
    }];

    this.setState({
      picture: '',
      text: '',
      tags: '',
    });

    const newPostsData = (postsData && postsData.length) ? [...newPost, ...postsData] : [...newPost];

    localStorage.setItem('postsData', JSON.stringify(newPostsData));

    this.props.onUpdate(newPostsData);
  };

    isDisabled = () => {
        const {text, picture, tags} = this.state;
        return !(text && picture && tags);
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
              <button className="btn"
                      onClick={this.handleClick}
                      disabled={this.isDisabled()}>
                <i className="fa fa-plus-circle" />
              </button>
            </div>
        </div>
      );
    }
}