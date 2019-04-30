import React, { Fragment, Component } from 'react';

import Header from '../Header/Header';
import Post from './Post';
import Footer from './Footer';
import NewPost from '../NewPost/NewPost';

import '../../data/posts-data';

const defaultData = [{
  id: '3',
  text: 'Blah, blah, blah',
  picture: 'https://pp.userapi.com/c846323/v846323906/1fe27c/EYUgUuudfZI.jpg',
  tags: '#qwerty',
}];

const data = JSON.parse(localStorage.getItem('postsData')) || defaultData;

localStorage.setItem('postsData', JSON.stringify(data));

export default class AllPosts extends Component {
  state = {
    posts: data,
  };

  handleUpdate = (newPostsData) => {
    this.setState({ posts: newPostsData });
  };

  render() {
    const postItems = this.state.posts.map((item) => {
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
    });

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
