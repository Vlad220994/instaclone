import React from 'react';

import Account from './Account';
import './post.scss';

const Post = () => {
  const postsData = JSON.parse(localStorage.getItem('postsData'));
  const elements = postsData.map(item => (
    <article className="post" key={item.id}>
      <Account />
      <div className="post-image">
        <img src={item.picture} alt="fsd" />
      </div>
      <div className="post-likes">
        <i className="fa fa-heart-o" />
        {' '}
        Likes
      </div>
      <div className="post-text">
        {item.text}
      </div>
    </article>
  ));
  return (
    <div className="posts">
      {elements}
    </div>
  );
};

export default Post;
