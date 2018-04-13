import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createPost } from '../actions/posts';

import PostForm from './PostForm.jsx';

import uniqueId from '../helpers/uniqueId';

class PostCreateForm extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            content: '',
        };

        this.state = this.initialState;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormReset = this.handleFormReset.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const id = this.props.generateNewId();

        const newPost = {
            id,
            title: this.state.title || 'Post Title',
            body: this.state.content || 'No content',
        };

        this.props.createPost(newPost);
        this.handleFormReset();
    }

    handleFormReset() {
        this.setState(this.initialState);
    }

    render() {
        return (
            <PostForm legend="Add new post"
                         title={ this.state.title }
                         content={ this.state.content }
                         resetText="Reset"
                         onFormReset={ this.handleFormReset }
                         onFormSubmit={ this.handleFormSubmit }
                         onInputChange={ this.handleInputChange } />
        );
    }
}

PostCreateForm.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostCreateForm);
