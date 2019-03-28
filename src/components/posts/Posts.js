import React from 'react';
import Post from './Post.js';

import postsData from '../../data/posts-data';

const Posts = () => {
  return ( <Post /> );
};

localStorage.setItem(postsData, JSON.stringify(postsData));

export default Posts;