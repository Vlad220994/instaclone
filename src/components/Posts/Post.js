import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './post.scss';

export default class Post extends Component {
  state = {
    done: false
  };

  onLikeClick = () => {
    this.setState(({ done }) => ({
      done: !done
    }));
  };

  render() {
    const { nickname, image, caption, tags, onDeleted, userAvatar, userMail } = this.props;
    const { done } = this.state;

    let classNames = "likes";

    if (done) {
      classNames += " likes-done";
    }

    return (
      <article className="post">
        <header className="post-user">
          <div className="post-user-avatar">
            <img src={userAvatar} alt={nickname} />
          </div>
          <div className="post-user-nickname">
            <span>{userMail}</span>
          </div>
          <div className="post-delete">
            <button
              className={classNames}
              type="button"
              value="open"
              onClick={onDeleted}
            />
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
        </div>
        <div className="post-caption">
          <strong>{userMail}</strong>
          <span>{caption}</span>
        </div>
        <div className="post-tags">
          <Link to={tags}>{tags}</Link>
        </div>
      </article>
    );
  }
}
