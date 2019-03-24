import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<AllPosts />, document.getElementById('root'));

export default AllPosts;