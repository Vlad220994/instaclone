import React, { Component } from 'react';

import './post.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Post extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {nickname, avatar, image, caption} = this.props;

    return (
      <article className="post">
        <header className="post-user">
          <div className="post-user-avatar">
            <img src={avatar} alt={nickname} />
          </div>
          <div className="post-user-nickname">
            <span>{nickname}</span>
          </div>
        </header>
        <div className="post-image">
          <img src={image} alt={nickname} />
        </div>
        <div className="post-likes">
          <button className="likes" type="submit">
            <span className="like" aria-label="like" />
          </button>
          <span>Likes</span>
        </div>
        <div className="post-caption">
          <strong>{nickname}</strong>
          <span>{caption}</span>
        </div>
      </article>
    );
  }
}

export default Post;
