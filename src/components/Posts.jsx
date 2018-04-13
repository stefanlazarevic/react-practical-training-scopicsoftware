import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import animation from '../sass/Animation.sass';

import PostCreateForm from './PostCreateForm.jsx';
import PostEditForm from './PostEditForm.jsx';
import Post from './Post.jsx';

import { getPosts } from '../actions/posts';

class Posts extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props;

        const PostsComponent = posts.map(
            (post, index) => <Post key={ post.id } id={ post.id } title={ post.title } content={ post.body } />
        );

        return (
            <div>
                <PostCreateForm generateNewId={ this.props.generateNewId }/>
                <div>
                    <ReactCSSTransitionGroup transitionName="slide"
                                             transitionEnterTimeout={ 500 }
                                             transitionLeaveTimeout={ 1000 } >
                        { PostsComponent }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps, { getPosts })(Posts);
