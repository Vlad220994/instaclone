import React from 'react';

import Image from './post-image';
import PostText from './post-text';
import Comments from './post-comments';
import Likes from './post-likes';
import postsData from '../../data/posts-data';
import './post.css';

const Post = () => {
  const elements = postsData.map((item) => {
    return (
      <div>
        <Image data={item.picture} />
        <PostText />
        <Comments />
        <Likes />
      </div>
    );
  });
  return (
    <div className="post">
      { elements }
    </div>
  );
};

export default Post;