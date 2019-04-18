import React, { Component } from 'react';

import Header from '../Header/Header';
import Post from './Post';
import Footer from './Footer';

import '../../data/posts-data';

export default class AllPosts extends Component {
  state = {
    postData: [
      {
        id: 1,
        nickname: 'Ivan',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82xOHo6gtgaRIF0N96voETDCZ4sjR1NAni5HQz3phHfq_SSGZqA',
        caption: 'Hello',
        image: 'http://static1.squarespace.com/static/58d94e54b3db2b57ce97c524/58daa04bb3db2b38d4674feb/5a8b721f71c10b584549bef8/1550014169797/How-To-Instagram-Pics-Travel-1500x1000.jpg?format=1500w'
      },
    ],
  };

  deletePost = (id) => {
    this.setState(({ postData }) => {
      const idx = postData.findIndex(el => el.id === id);

      const newArray = [
        ...postData.slice(0, idx),
        ...postData.slice(idx + 1),
      ];
      postData.splice(idx, 1);
      return {
        postData: newArray,
      };
    });
  };

  render() {
    return (
      <div className="all-posts">
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
      </div>
    )
  }
}
