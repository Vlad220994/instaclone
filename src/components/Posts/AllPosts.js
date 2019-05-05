import React, { Fragment, Component } from 'react';

import Header from '../Header/Header';
import Post from './Post';
import Footer from './Footer';
import NewPost from '../NewPost/NewPost';
import { connect } from 'react-redux';
import {loadPosts} from "../../redux/actions/posts";

class AllPosts extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  handleUpdate = () => {
      this.props.loadPosts();
  };

  render() {
    const {posts} = this.props;
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

function mapStateToProps(state) {
    const { posts } = state.postsReducer;
    return { posts }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPosts: () => dispatch(loadPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
