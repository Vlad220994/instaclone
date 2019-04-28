import React, { Component, Fragment } from 'react';

import Header from '../Header/Header';
import Post from './Post';
import Footer from './Footer';
import NewPost from "../newPost/newPost";

import '../../data/posts-data';

export default class AllPosts extends Component {
    state = {
        posts: JSON.parse(localStorage.getItem('postsData'))
    };


    handleUpdate = (newPostsData) => {
        this.setState({posts: newPostsData})
    };

    render() {
        const postItems = this.state.posts.map((item) => {
            const {
                id,
                text,
                picture,
                tags
            } = item;

            return <Post key={id}
                  nickname={id}
                  avatar={''}
                  caption={text}
                  image={picture}
                  tags={tags}
            />
        });

        return (
            <Fragment>
                <Header/>
                <NewPost onUpdate={this.handleUpdate}/>
                {postItems}
                <Footer/>
            </Fragment>
        );
    }
}
