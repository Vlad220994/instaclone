import React, { Component } from 'react';

import './post.scss';

export default class Post extends Component {
  state = {
    done: false,
  };

  onLikeClick = () => {
    this.setState(({ done }) => ({
      done: !done,
    }));
  };

  render() {
    const { nickname, avatar, image, caption } = this.props;
    const { done } = this.state;

    let classNames = 'likes';

    if (done) {
      classNames += ' likes-done';
    }

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
          <button
            className={classNames}
            type="button"
            onClick={this.onLikeClick}
          >
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
