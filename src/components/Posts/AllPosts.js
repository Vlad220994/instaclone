import React, { Fragment, Component } from 'react';

import Header from '../Header/Header';
import Post from './Post';
import Footer from './Footer';
import NewPost from '../NewPost/NewPost';

import '../../data/posts-data';

const data = JSON.parse(localStorage.getItem('postsData'));

export default class AllPosts extends Component {
  state = {
    posts: data,
  };

  handleUpdate = (newPostsData) => {
    this.setState({ posts: newPostsData });
  };

  render() {
    const {posts} = this.state;
    const postItems = (posts && posts.length) ? posts.map((item) => {
      const {
        id,
        text,
        picture,
        tags,
      } = item;

      return (
        <Post
          key={id}
          nickname={id}
          avatar={''}
          caption={text}
          image={picture}
          tags={tags}
        />
      );
    }) : null;

    return (
      <Fragment>
        <Header />
        <NewPost onUpdate={this.handleUpdate} />
        {postItems}
        <Footer />
      </Fragment>
    );
  }
}
