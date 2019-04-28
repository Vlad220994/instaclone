import React, {Component} from 'react';

export default class NewPost extends Component {
    state = {
        picture: '',
        text: '',
        tags: ''
    };
  
    handleClick = () => {
        const postsData = JSON.parse(localStorage.getItem('postsData'));
        const {picture, text, tags} = this.state;
        
        const newPost = {
            id: postsData.length + 1,
            text,
            picture,
            tags,
        };

        this.setState({
            picture: '',
            text: '',
            tags: ''
        }) ;

        let newPostsData = [newPost, ...postsData];

        localStorage.setItem('postsData', JSON.stringify(newPostsData));

        this.props.onUpdate(newPostsData);
    };

    pictureChange = (event) => {
        this.setState({picture: event.target.value});
    };

    textChange = (event) => {
        this.setState({text: event.target.value});
    };

    tagsChange = (event) => {
        this.setState({tags: event.target.value});
    };

    render() {
        const {picture, text, tags} = this.state;

        return (
            <main>
                <input type="input" name="picture" value={picture} onChange={this.pictureChange}/>
                <input type="input" name="text" value={text} onChange={this.textChange}/>
                <input type="input" name="tags" value={tags} onChange={this.tagsChange}/>
                <button onClick={this.handleClick}>Add post</button>
            </main>
        );
    }
}
