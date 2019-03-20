import React from 'react';
import ReactDOM from 'react-dom';

import Header from './post-header';
import Posts from './posts';
import Footer from './post-footer';


const allPosts = () => {
  return(
    <div>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

ReactDOM.render(<allPosts />, document.getElementById('root'));

export default allPosts;