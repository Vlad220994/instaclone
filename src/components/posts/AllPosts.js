import React from 'react';

import Header from './Header';
import Posts from './Posts';
import Footer from './Footer';


const AllPosts = () => {
  return(
    <div className="all-posts">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

export default AllPosts;