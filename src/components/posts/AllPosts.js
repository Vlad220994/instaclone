import React, { Component, Fragment } from 'react';

import Header from '../Header/Header';
import Post from './Post';
import Footer from './Footer';

import '../../data/posts-data';

export default class AllPosts extends Component {
  state = {
    data: this.props.data,
  }

  deletePost = (id) => {
    const newData = this.state.data.filter(item => (
      item.id !== id
    ));
    this.setState(
      { data: newData },
      () => (localStorage.setItem('postsData', JSON.stringify(newData))),
    );
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Post
          nickname="Kolya"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82xOHo6gtgaRIF0N96voETDCZ4sjR1NAni5HQz3phHfq_SSGZqA"
          caption="Hi"
          image="http://static1.squarespace.com/static/58d94e54b3db2b57ce97c524/58daa04bb3db2b38d4674feb/5a8b721f71c10b584549bef8/1550014169797/How-To-Instagram-Pics-Travel-1500x1000.jpg?format=1500w"
        />

        <Post
          nickname="Kolya"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82xOHo6gtgaRIF0N96voETDCZ4sjR1NAni5HQz3phHfq_SSGZqA"
          caption="Hi"
          image="https://blog.hootsuite.com/wp-content/uploads/2016/08/instagram-hashtags.jpg"
        />

        <Post
          nickname="Kolya"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82xOHo6gtgaRIF0N96voETDCZ4sjR1NAni5HQz3phHfq_SSGZqA"
          caption="Hi"
          image="http://newstimesbd.com/wp-content/uploads/2017/10/egg.jpg"
        />

        <Post
          postData={this.state.postData}
          onDeleted={this.deletePost}
        />
        <Footer />
      </Fragment>
    );
  }
}
