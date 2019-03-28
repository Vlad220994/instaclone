import React from 'react';

import Account from './Account';
import Image from './Image';
import PostText from './PostText';
import Likes from './Likes';
import postsData from '../../data/posts-data';
import './post.scss';

const Post = () => {
  const elements = postsData.map((item) => {
    return (
      <article className="post" key={item.id}>
        <Account />
        <Image data={ item.picture } alt={ item.id } />
        <Likes />
        <PostText data={ item.text } />
      </article>
    );
  });
  return (
    <div className="posts">
      { elements }
    </div>
  );
};

export default Post;